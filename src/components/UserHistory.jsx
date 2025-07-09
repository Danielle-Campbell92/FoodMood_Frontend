import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function UserHistory(){
    const [moodData, setMoodData] = useState([])

    useEffect(() => {
       async function getTrackedMoods(){
        const response = await fetch("https://localhost:3000/users/account/mood/stats", {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        const result = await response.json()
       } 
    }, [])

    
    const chartData = {
        labels: moodData.map(item => item.emotion),
        datasets: [{
            label: 'Mood Time',
            data: moodData.map(item => item.count),
            backgroundColor: ['']
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