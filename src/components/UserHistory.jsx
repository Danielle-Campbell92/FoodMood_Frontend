import React from 'react';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function UserHistory(){
    const [moodData, setMoodData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
       async function getTrackedMoods(){
        try{
            const response = await fetch("http://localhost:3000/users/account/mood/stats", {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        const result = await response.json()
        setMoodData(result)
       }catch(error){
        setError("Unable to track")
       }
      }
      getTrackedMoods()
    }, [])

    
    const chartData = {
        labels: moodData.map(item => item.emotion),
        datasets: [{
            label: 'Mood Time',
            data: moodData.map(item => item.count),
            backgroundColor: ['yellow', 'blue', 'red', '#pink', 'gray']
        }]
    }

    return(
        <>
        <div>
        <h2>Your Mood History</h2>
        <Doughnut data={chartData}/>
        </div></>
    )
}