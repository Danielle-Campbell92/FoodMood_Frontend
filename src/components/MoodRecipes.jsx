import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard.jsx';



export function MoodRecipes(){
    const { mood } = useParams();
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState(null)
    const [moodId, setMoodId] = useState(null)


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


    useEffect(() => {
        const getMoodId = async () => {
            try {
                const response = await fetch("http://localhost:3000/mood")
                const moods = await response.json()
                const foundMood = moods.find(m => m.emotion.toLowerCase() === mood.toLowerCase())
                if (foundMood) {
                    setMoodId(foundMood.id);
                } else {
                    setError("Mood not found")
                }
            } catch (error) {
                setError("Failed to fetch moods")
            }
        }
        getMoodId()
    }, [mood])


    useEffect(() => {
        const setTrackMood = async () => {
            try{
                const response = await fetch("http://localhost:3000/api/users/account/mood/track", {
                    method: 'POST',
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ mood_id: moodId }),  
                })
            }catch(error){
                setError("Unable to track mood")
            }
        }
        setTrackMood()
    }, [moodId])

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