import React, {createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    products:[],
    user:null,
    token:null,
    order:null
}

//createContext 
export const GlobalContext =  createContext(initialState)

//Wrap in a Provider 
export const GlobalProvider = ({ children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState)

    return <GlobalContext.Provider value={{
        products:state.products,
        user:state.user,
        token:state.token,
        order:state.order
        }}>
        {children}
    </GlobalContext.Provider>
}