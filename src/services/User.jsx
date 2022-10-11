import { auth} from "./config/connectionFirebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";


export const User = {
    //Create User
    createUser: async ({email , contraseña}) => {
        return await createUserWithEmailAndPassword(auth, email, contraseña);                   
    },

    //Login User
    loginUser: async ({email , password}) => {
        console.log(password);
        return await signInWithEmailAndPassword(auth, email, password);               
    }
}
    

