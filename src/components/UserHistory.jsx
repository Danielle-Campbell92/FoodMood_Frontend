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
        setMoodData(result.data)
       }catch(error){
        setError("Unable to return stats")
       }
      }
      getMoods()
    }, [])
    
    
    const emotionColorMap = {
        happy: 'yellow',
        sad: 'blue',
        angry: 'red',
        romantic: 'pink',
        neutral: 'gray'
    }

    const chartData = {
        labels: moodData.map(m => m.emotion),
        datasets: [{
            label: 'Mood Time',
            data: moodData.map(m => m.count),
            backgroundColor: moodData.map(m => emotionColorMap[m.emotion] || 'black')
        }]
    }

    return(
        <>
        <div className='mood-video-background'>
                <iframe src='https://www.youtube.com/embed/z9gtqEhBUJA?autoplay=1&mute=1&controls=0&loop=1&playlist=z9gtqEhBUJA' title='Mood Video Background'></iframe>
        </div>
        <div className='chart-container'>
        <h2>Your Mood History</h2>
        {moodData.length === 0 ? (
            <p>Loading your mood history...</p>
        ) : (
           <Doughnut data={chartData}/> 
        )}
        </div></>
    )
}