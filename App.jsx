import Navigations from './components/Navigations';
import RecipeList from './compnenents/RecipeList';
import RecipeDetails from './componenets/RecipeDetails';
import {Routes, Route} from ''


export default function App(){
    const [token, setToken] = useState(localStorage.getItem("token"))


    return(
        <>
        <div>
            <Navigations token={token} setToken={setToken}/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/saved" element={<Saved token={token} setToken={setToken}/>}/>
                <Route path="/login" element={<Login token={token} setToken={setToken}/>}/>
                <Route path="/register" element={<Register token={token} setToken={setToken}/>}/>
                <Route path="/recipes" element={<RecipeList/>}/>
                <Route path="/recipes/:id" element={<RecipeDetails/>}/>
            </Routes>
        </div>
        </>
    )
}

