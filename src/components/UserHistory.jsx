import React from 'react';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend)

export default function UserHistory(){
    const [moodData, setMoodData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
       async function getMoods(){
        try{
            const response = await fetch("http://localhost:3000/api/users/account/mood/stats", {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        const result = await response.json()
        console.log("Fetched mood stat:", result)
        setMoodData(result.data)
       }catch(error){
        setError("Unable to return stats")
       }
      }
      getMoods()
    }, [])

    useEffect(() => {
        async function setTrackMood(){
        try{
            const response = await fetch("http://localhost:3000/api/users/account/mood/track", {
                method: 'POST',
                headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
                },
            body: JSON.stringify({mood_id}),
        })
        const result = await response.json()
        setMoodData(result.data)
        }catch(error){
         setError("Unable to track")
        }
    }
    setTrackMood()
    }, [])


    
    
    const chartData = {
        labels: moodData.map(item => item.emotion),
        datasets: [{
            label: 'Mood Time',
            data: moodData.map(item => item.count),
            backgroundColor: ['yellow', 'blue', 'red', 'pink', 'gray']
        }]
    }

    return(
        <>
        <div>
        <h2>Your Mood History</h2>
        {moodData.length === 0 ? (
            <p>Loading your mood history...</p>
        ) : (
           <Doughnut data={chartData}/> 
        )}
        
        </div></>
    )
}