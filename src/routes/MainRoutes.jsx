import { BrowserRouter , Routes, Route } from "react-router-dom";
import Menu from "../components/Menu";
import routes from "./routes"
const MainRoutes = () => {
    return(
            <BrowserRouter>        
                <Menu/>
                <Routes>
                    {
                        routes.map((route , index) =>{                        
                            const {element , path} = route;
                            return(
                                <Route key={index} element={element}  path={path}/>
                            )
                        })
                    }
                </Routes>
            </BrowserRouter>
    )
}

export default MainRoutes;