import ImagesGallery from "./ImagesGallery"
import styles from "./css/ImagesGallery.module.css"
import { H2 } from "../../styles-components/Title"

const Gallery = () =>{
    const showGallery = 
        ImagesGallery.map(item =>{
            if(item.show){
                return(
                    <div key={item.id} className={styles.containerSubImage}>
                        <img  src={item.image} alt={item.id}/>
                    </div>
                )
            }            
        })
    

    return(
        <>
            <H2>GALLERY</H2>
            <div className={styles.container}>
                
                <div className={styles.containerInfo}>
                    <p>
                        En esta sección encontrarás los algunos de los trabajos realizados por nuestros profesionales.
                        Para que puedas ver el talento y las magnificas creaciones que podemos realizar para ti.
                    </p>
                </div>
                <div className={styles.containerImage}>
                    {showGallery}
                </div>
            </div>
        </>
        
    )
}

export default Gallery;