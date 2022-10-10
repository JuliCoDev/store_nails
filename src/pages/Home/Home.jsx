import {Banner , InfoBanner} from "../../styles-components/Banner"
import Gallery from "../Gallery/Gallery";
import {ProductsCategory} from "../Products/ProductsCategory";

const Home = () =>{
    return(
        <div>
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