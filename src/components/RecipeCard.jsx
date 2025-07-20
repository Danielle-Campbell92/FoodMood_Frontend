import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React from 'react';

export default function RecipeCard({title, description, id}){
    const navigate = useNavigate();
    const { mood } = useParams();

    return(
        <>
        <div className={`recipe-card-${mood}`}>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => navigate(`/recipes/${id}`)}>View Recipe</button>
        </div>
        </>
    )
}