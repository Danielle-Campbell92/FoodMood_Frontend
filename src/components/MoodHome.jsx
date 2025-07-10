import { useState, useEffect} from "react"
import {Link} from "react-router-dom"
import Navigations from "./Navigations"
import React from "react"

function MoodsHome(){
    const[moods, setMoods] = useState([])
    useEffect(()=>{
        async function getMoods(){
            const response = await fetch("https://3000/mood")
            const result = await response.json()
            console.log(result)
            setMoods(result)
        }
        getMoods()
    })
    return(
        <>
        
        </>
    )
}

export default MoodsHome