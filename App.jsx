import Navigations from './src/components/Navigations';
import RecipeList from './compnenents/RecipeList';
import RecipeDetails from './componenets/RecipeDetails';
import {Routes, Route} from 'react-router-dom';
import Register from './src/components/Register';
import Login from './src/components/Login';
import UserHistory from './src/components/UserHistory';
import MoodHome from './src/components/MoodHome';


export default function App(){
    const [token, setToken] = useState(localStorage.getItem("token"))


    return(
        <>
        <div>
            <Navigations token={token} setToken={setToken}/>
            <Routes>
                <Route path="/" element={<MoodHome />}/>
                <Route path="/account" element={<UserHistory token={token} setToken={setToken}/>}/>
                <Route path="/login" element={<Login token={token} setToken={setToken}/>}/>
                <Route path="/register" element={<Register token={token} setToken={setToken}/>}/>
                <Route path="/recipes" element={<RecipeList/>}/>
                <Route path="/recipes/:id" element={<RecipeDetails/>}/>
            </Routes>
        </div>
        </>
    )
}

