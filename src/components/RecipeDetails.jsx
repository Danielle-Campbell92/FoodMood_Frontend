import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function RecipeDetails(){

    const [recipe, setRecipes] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRecipe() {
            try {
                const response = await fetch(`http://localhost:3000/recipes/${id}`);

                if (!response.ok) throw new Error("Error fetching recipe");
                const data = await response.json();
                setRecipes(data);
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

    return(
        <div>
            <div>
                <h2>What's your FoodMood?</h2>
                <p>{recipe.mood_id}</p>
            </div>
            <div className='recipeCard'>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <h4>Ingredients:</h4>
            <ul>
                {recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
            <h4>Let's Cook!</h4>
            <p>{recipe.instructions}</p>
            </div>

            <button onClick={() => navigate(-1)}>Back to {recipe.mood_id} recipes</button>
        </div>
    )
}