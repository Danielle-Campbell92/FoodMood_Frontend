import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard.jsx';



export function MoodRecipes(){
    const { mood } = useParams();
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMoodRecipes = async () => {
            try{
                const response = await fetch(`http://localhost:3000/recipes/${mood}`)
                const result = await response.json()
                console.log("fetched recipes:", result)
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
                <RecipeCard key={recipe.id} {...recipe}/>
            ))}
        </div>
        </>
    )
}