import { useContext } from "react"
import { Input } from "../../components/Input/Input"
import { LoginContext } from "../../context/LoginContext"
import { Container } from "../../styles-components/Container"
import  '../../styles-components/css/Button.css'
import  '../../styles-components/css/Message.css'
import { H2 } from "../../styles-components/Title"
import { useState } from "react"
import { User } from "../../services/User"



const SignIn = () =>{

    const session = useContext(LoginContext);
    
    //Values Inputs
    const [data, setData] = useState({
        email : '',
        password : '',
    });

    const [messageError , setMessageError] = useState(null);


    const handleLogin = (e) =>{
        e.preventDefault();    

        User.loginUser(data)
            .then((userCredential) => {
                //If login is correct the session is save in storage
                const user = {
                    accessToken : userCredential.user.accessToken,
                    email : userCredential.user.email
                };
                window.sessionStorage.setItem('session', JSON.stringify(user));
               
            })
            .catch(() => {
                setMessageError('Usuarioi y/o contraseña incorrectos');
            });

        session.dispatch({type : 'LOGIN' , value : {email: data.email , password: data.password}})

    } 

    

    return(
        <Container>
            <H2>Iniciar sesión</H2>
            <form onSubmit={e => handleLogin(e)} method="POST">
                <Input 
                    type="text" 
                    nameInput="email" 
                    placeholder="Email"
                    required   
                    setValue={setData}     
                    data={data}        
                />
                <Input 
                    type="password" 
                    nameInput="Password"
                    required
                    setValue={setData}     
                    data={data}   

                />
                {messageError !== null &&
                    <p className="messageError">
                        {messageError}
                    </p>
                }
                <button type='submmit' className='button buttonSucces' >
                    Iniciar sesión
                </button>
            </form>
        </Container>
    )
}

export default SignIn;