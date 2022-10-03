import { BrowserRouter , Routes, Route } from "react-router-dom";
import routes from "./routes"
const MainRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                {
                    routes.map(route =>{                        
                        const {element , path} = route;
                        return(
                            <Route element={element}  path={path}/>
                        )
                    })
                }
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes;