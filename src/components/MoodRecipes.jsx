import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react-router-dom';


export function MoodRecipes(){
    const { id } = useParams();
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState(null);

    return(
        <>
        </>
    )
}