import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Register({token, setToken, username, setUsername, password, setPassword}){
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    
    async function handleSubmit(e){
        e.preventDefault()

        try{

        }catch(error){
            setError("Unable to register")
        }

    }
    return(
        <>
        </>
    )
}