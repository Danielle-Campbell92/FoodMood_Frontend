import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Register({token, setToken, username, setUsername, password, setPassword}){
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    
    async function handleSubmit(e){
        e.preventDefault()

        try{
            const response = await fetch("http://localhost:3000/api/users/register", 
                {
                    method:"POST",
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({
                        username,
                        password
                    })
                }
            )
            const result = await response.json()
            setToken(result.token)
            localStorage.setItem("token", result.token)
            setSuccess("Successfully registered")
            alert("You are officially registered")
            navigate("/login")
        }catch(error){
            setError("Unable to register")
            alert("Unable to register")
        }
    }
    return(
        <>
        <div>
            <h2>Register to Create An Account</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <br></br>
                <br></br>
                <label>
                    Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <br></br>
                <br></br>
                <button type="submit">Register</button>
            </form>
        </div>
        </>
    )
}