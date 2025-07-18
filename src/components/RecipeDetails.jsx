import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from 'react';

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //added console log to check if id is being passed (ran into issues)
    console.log("Recipe ID from params:", id);
    async function fetchRecipe() {
      try {
        const response = await fetch(`http://localhost:3000/recipes/${id}`);

        if (!response.ok) throw new Error("Error fetching recipe");
        const result = await response.json();
        console.log("Recipe data from API:", result);
        setRecipe(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchRecipe();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="single-recipe-page">
      <div className={`recipe-title-${recipe.emotion}`}>
        <h2>What's your FoodMood?</h2>
        <p>{recipe.emotion}</p>
      </div>
      <div>
        <h2>Let music help your Mood!</h2>
        {recipe.playlist_url && (
          <div>
            <h3>Mood Playlist:</h3>
            <iframe
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                recipe.playlist_url
              )}&color=%23ff5500&auto_play=false`}
              width="700"
              height="150"
            ></iframe>
          </div>
        )}
      </div>
      <div className="single-recipe">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <h4>Ingredients:</h4>
        <ul>
          {recipe.ingredients &&
            recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
        </ul>
        <h4>Let's Cook!</h4>
        <p>{recipe.instructions}</p>
      </div>

      <button onClick={() => navigate(-1)}>
        Back to {recipe.emotion} recipes
      </button>
    </div>
  );
}

