import UserRoot from "../Pages/UserRoot";
import Home from "../Pages/Home/Home";
import Add from "../Pages/Add/Add";
import Favorites from "../Pages/Favorites/Favorites";
import NotFound from "../Pages/NotFound/NotFound";


const Routes=[{

    path:"/",
    element:<UserRoot/>,
    children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"/add",
            element:<Add/>
        },
        {
            path:"/favorites",
            element:<Favorites/>
        },
        {
            path:"*",
            element:<NotFound/>
        }
    ]
}]
export default Routes