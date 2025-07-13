import React from "react";

export default function RecipeCard({title, description}){

    return(
        <>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        </>
    )
}