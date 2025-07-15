import { useNavigate } from 'react-router-dom';

export default function RecipeCard({title, description, id}){
    const navigate = useNavigate();

    return(
        <>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => navigate(`/recipes/${id}`)}>View Recipe</button>
        </div>
        </>
    )
}