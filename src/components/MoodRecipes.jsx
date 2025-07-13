import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react-router-dom';


export function MoodRecipes(){
    const { id } = useParams();
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMoodRecipes = async () => {
            try{
                const response = await fetch('')
                const result = await response.json()
                setRecipes(result)
            }catch(error){
            setError(error)} 
        }
        fetchMoodRecipes()
    }, [id])

    return(
        <>
        </>
    )
}