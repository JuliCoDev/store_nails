import { createContext, useReducer } from "react";
import { useGetItemStorage } from "../hooks/useStorage";

export const LoginContext = createContext('');

const reducer = (state, action) => {
    const {value , type } = action;
    console.log(value.email)
    switch (type){
        case "LOGIN":
            //The new state is the session of user
            return  (JSON.parse(localStorage.getItem('session'))) ? JSON.parse(localStorage.getItem('session')): [];                                                                 

        default: 
            return state
    }
}

const LoginProvider = ({children}) =>{

    let initialState = { session : useGetItemStorage('session')};
    const [state , dispatch ] = useReducer(reducer , initialState);
    

    return (
        <LoginContext.Provider value={{ user : state, dispatch }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;