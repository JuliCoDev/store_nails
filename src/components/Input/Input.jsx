import styles from './css/Input.module.css';

export const Input = ({
    type , 
    nameInput, 
    required, 
    data,
    setValue
}) =>{
    
    const handleChange = (e) =>{
        setValue({
            ...data,
           [e.target.name]: e.target.value
        })            
    }

    return(   
        <input className={styles.componentInput}
            onChange={(e) => {handleChange(e)}}
            type={type}
            placeholder={nameInput}
            name={nameInput.toLowerCase()}
            required={required}
        />                   
    )
}

