import { Link } from "react-router-dom";
import React from "react";

export default function Navigations({token, setToken}){
    const handleLogout = () => {
        localStorage.removeItem('token')
        setToken(null)
    }

    return(
        <>
        <nav>
            <div className="navBar">
                <Link to="/">Home</Link>
                <br></br>
                {token ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
                {token && <Link to="/saved">Account</Link>}
            </div>
        </nav>
        </>
    )
}