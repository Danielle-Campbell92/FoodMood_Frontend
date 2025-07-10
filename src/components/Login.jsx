import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

export default function Login({
  username,
  setUsername,
  password,
  setPassword,
  token,
  setToken,
}) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const responst = await fetch("https://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setToken(result.token);
        localStorage.setItem("token", result.token);
        setUsername(result.username);
        setSuccess("Successfully logged in");
        navigate("/");
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Login failed");
      }
    } catch (error) {
      setError("Unable to login");
      alert("Unable to login");
    }
  }

  return (
  <div>
    <h2>Login to your account below:</h2>
    <form onSubmit={handleSubmit}>
        <label>
            Username: 
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
            Password:
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <br />
        <button type="submit">Login</button>
        <br></br>
        <br></br>
        <Link to="/register">
        <button type="submit">Create an Account?</button>
        </Link>
        
    </form>
  </div>)
}
