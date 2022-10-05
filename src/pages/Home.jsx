import {Banner , InfoBanner} from "../styles-components/Banner"
import {OurServices} from "./OurServices";

const Home = () =>{
    return(
        <div>
            <Banner>
                <InfoBanner>
                    <h2>Carolina spa y uñas</h2> 
                    Buscamos ofrecerte un espacio de tranquilidad y relajación en medio de la ciudad.
                </InfoBanner>
            </Banner>
            <OurServices/>
        </div>
        
    )
}

export default Home;