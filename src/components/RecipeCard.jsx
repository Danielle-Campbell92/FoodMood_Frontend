import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function RecipeCard({title, description, id}){
    const navigate = useNavigate();

    return (
    <div className="recipe-card">
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <button onClick={() => navigate(`/recipes/${id}`)} className="view-button">
        View Recipe
      </button>
    </div>
  );
}