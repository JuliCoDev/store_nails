import Home from "../pages/Home/Home";
import SignUp from "../pages/Login/SignUp";
import SignIn from "../pages/Login/SignIn";


const VIEW_HOME = {
    element :  <Home/>,
    path : "/"
}

const VIEW_SINGUP = {
    element: <SignUp/>,
    path : "/signup"

}

const VIEW_LOGIN = {
    element : <SignIn/>,
    path : "/login"
}

const VIEWS = [VIEW_HOME, VIEW_SINGUP, VIEW_LOGIN];

export default VIEWS;