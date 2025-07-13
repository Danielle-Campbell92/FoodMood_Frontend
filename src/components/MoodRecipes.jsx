import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RecipeDetails from './RecipeDetails';


export function MoodRecipes(){
    const { mood } = useParams();
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMoodRecipes = async () => {
            try{
                const response = await fetch(`http://localhost:3000/recipes/${mood}`)
                const result = await response.json()
                setRecipes(result)
            }catch(error){
            setError(error)} 
        }
        fetchMoodRecipes()
    }, [mood])

    return(
        <>
        <div>
            <h2>Recipes for Mood: {mood}</h2>
            {recipes.map((recipe) => (
                <RecipeDetails key={recipe.id} {...recipe}/>
            ))}
        </div>
        </>
    )
}