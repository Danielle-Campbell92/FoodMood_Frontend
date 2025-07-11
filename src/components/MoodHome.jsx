import { useState, useEffect} from "react"
import {Link} from "react-router-dom"
import Navigations from "./Navigations"
import React from "react"

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
        <>
        {moods.map((mood) => (
        <button key={mood.id}>
            <strong>{mood.emotion}</strong>: {mood.description}
        </button>
      ))}
        </>
    )
}

export default MoodsHome