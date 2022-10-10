import { Link } from "react-router-dom";
import {useListQuery} from "../../hooks/useQuery";
import { Cart, ContainerCart } from "../../styles-components/Carts";
import { Section } from "../../styles-components/Section";
import { H2, H3 } from "../../styles-components/Title";

export const ProductsCategory = () => {

    //Call Api list categories about our services
    let category = useListQuery('/category');

    const showService = 
        category.map((item)=>{
            const {name,image,id} = item;
            return(
                <Cart key={id}>
                    <Link to={`/products/` + id}>
                        <img src={image} alt={id}/>
                        <H3>{name}</H3>
                    </Link>                    
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