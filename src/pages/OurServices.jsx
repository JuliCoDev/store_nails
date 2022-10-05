import {useListQuery} from "../hooks/Query/useListQuery";
import { Cart, ContainerCart } from "../styles-components/Carts";
import { Section } from "../styles-components/Section";
import { H2, H3 } from "../styles-components/Title";

export const OurServices = () => {

    //Call Api list categories about our services
    let cateogry = useListQuery('/category');

    const showService = 
        cateogry.map((item)=>{
            const {name,image,id} = item;
            return(
                <Cart key={id}>
                    <img src={image} alt={id}/>
                    <H3>{name}</H3>
                </Cart>
            )
        })
    
    return(               
        <Section>
            <H2>Nuestros servicios</H2>
            <ContainerCart>
                {showService}
            </ContainerCart>   
        </Section>                     
    )
}