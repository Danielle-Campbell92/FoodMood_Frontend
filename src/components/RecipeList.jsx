import RecipeDetails from "./RecipeDetails";
import { useState, useEffect } from "react";

export default function RecipeList({ recipe }) {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAllRecipes() {
      try {
        const response = await fetch("http://localhost:3000/recipes");

        const data = await response.json();
        console.log(data);

        setRecipes(data);
      } catch (err) {
        setError("Unable to fetch recipes");
        console.error(err);
      }
    }
    fetchAllRecipes();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeDetails
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          description={recipe.description}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          mood_id={recipe.mood_id}
        />
      ))}
    </div>
  );
}
