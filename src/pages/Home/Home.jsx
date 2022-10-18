import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import {Banner , InfoBanner} from "../../styles-components/Banner"
import Gallery from "../Gallery/Gallery";
import {ProductsCategory} from "../Products/ProductsCategory";

const Home = () =>{
    const login = useContext(LoginContext); 
    return(
        <div>
            {console.log(login)}            
            <Banner>
                <InfoBanner>
                    <h2>Carolina spa y uñas</h2> 
                    Buscamos ofrecerte un espacio de tranquilidad y relajación en medio de la ciudad.
                </InfoBanner>
            </Banner>
            <ProductsCategory/>
            <Gallery/>
        </div>
        
    )
}

export default Home;