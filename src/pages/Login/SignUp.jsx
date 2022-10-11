import { useState } from 'react';
import { Input } from '../../components/Input/Input'
import { User } from '../../services/User';
import { Container } from '../../styles-components/Container';
import {H2} from '../../styles-components/Title'
import  '../../styles-components/css/Message.css'
import  '../../styles-components/css/Button.css'
import { Link } from 'react-router-dom';

const style = {
    color : 'blue'
}

const SignUp = () =>{
    //Values Inputs
    const [data, setData] = useState({
        nombre : '',
        apellido : '',
        email : '',
        contraseña : '',
    });

    //Validate if user was create
    const [userCreate , setUserCreate] = useState()

    const onSubmit = (e) =>{
        e.preventDefault();        


        User.createUser(data).then(() => {
            setUserCreate(true);
          })
          .catch(() => {
            setUserCreate(false);
          });
    } 


    return(
        <Container>
            <H2>Registro</H2>
            <form onSubmit={e => onSubmit(e)} method="POST"> 
                <Input 
                    type="text" 
                    nameInput="Nombre" 
                    required
                    setValue={setData}     
                    data={data}               
                />
                <Input 
                    type="text" 
                    nameInput="Apellido" 
                    required
                    setValue={setData}
                    data={data}
                />
                <Input 
                    type="text" 
                    nameInput="Email"
                    reuired
                    setValue={setData}
                    data={data}
                />
                <Input 
                    type="password" 
                    nameInput="Contraseña"
                    reuired
                    setValue={setData}
                    data={data}

                />
                <button type='submmit' className='button buttonSucces' >
                    Enviar
                </button>
            </form>
            {userCreate &&

                <div className='messageSucces'>
                    USUARIO CREADO CORRECTAMENTE INICIA SESIÓN PARA CONTINUAR
                </div>
            }
            <p>
                ¿Ya tienes una cuenta? <Link to="/login" style={style}>Inicia sesión aquí</Link>
            </p>
        </Container>
    )
}

export default SignUp;