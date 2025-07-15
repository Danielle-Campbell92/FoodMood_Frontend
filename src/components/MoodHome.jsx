import { useState, useEffect} from "react"
import {Link} from "react-router-dom"
import Navigations from "./Navigations"
import React from "react"
import '../App.css'
import { color } from "chart.js/helpers"

const MoodsHome = () =>{
    const [moods, setMoods] = useState([]);
    useEffect(() => {
        const fetchMoods = async () => {
            try {
                const response = await fetch("http://localhost:3000/mood");
                if(!response.ok) {
                    throw new Error("Error fetching moods");
                }
                const data = await response.json();
                console.log(data)
                setMoods(data);
            }catch(error) {
                console.error("Error fetching moods:", error);
            }
        };
        fetchMoods();
    }, []);

    return(
        <div className='mood-button-container'>
            <h2>Hello and welcome to FoodMood! To continue, select the button that best aligns with your current mood.</h2>
                <h3>Hint: Login to save your favorite recipes and playlists!</h3>
        {moods.map((mood) => (
        <Link key={mood.id} to={`/mood/${mood.emotion}`}>
            <button className={`card card-${mood.emotion.toLowerCase()}`}>
                <strong>{mood.emotion}</strong>: {mood.description}
            </button>
        </Link>
      ))}
        </div>
    )
}

export default MoodsHome