import Navigations from './components/Navigations.jsx';
// import RecipeDetails from './components/RecipeDetails.jsx';
import RecipeList from './components/RecipeList.jsx';
import {Routes, Route} from 'react-router-dom';
import Register from './components/Register.jsx';
// import Login from './components/Login.jsx';
// import UserHistory from './components/UserHistory.jsx';
import MoodHome from './components/MoodHome.jsx';
import { useState } from 'react';
import React from 'react';



export default function App(){
    const [token, setToken] = useState(localStorage.getItem("token") || null)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    return(
        <>
        <div>
            <Navigations token={token} setToken={setToken}/>
            <Routes>
                <Route path="/" element={<MoodHome />}/>
                <Route path="/account" element={<UserHistory token={token} setToken={setToken}/>}/>
                <Route path="/login" element={<Login token={token} setToken={setToken} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}/>
                <Route path="/register" element={<Register token={token} setToken={setToken} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}/>
                <Route path="/recipes" element={<RecipeList/>}/>
                <Route path="/recipes/:id" element={<RecipeDetails/>}/>
            </Routes>
        </div>
        </>
    )
}

