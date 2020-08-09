import React, {createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'
const initialState = {
    products:[],
    user:null,
    token:localStorage.getItem('token'),
    order:null,
    isAuthenticated:false
}

//createContext 
export const GlobalContext =  createContext(initialState)

//Wrap in a Provider 
export const GlobalProvider = ({ children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState)
  
    async function getProducts(){
        
        try{
            console.log("hey")
            const res = await axios.get('/api/v1/products/')
            dispatch({
                type:'GET_PRODUCTS',
                payload:res.data.data
            })
        } catch (err){
            console.log(err)
            dispatch({
                type:'TRANSACTION_ERROR',
                payload:err.response.error
            })
        }
    }

    async function loginUser(email,password){
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        try{
            console.log(email,password)
            const body = JSON.stringify({email,password})
            const res = await axios.post('/auth/v1/login/',body,config)
            dispatch({
                type:"LOGIN_SUCCESS",
                payload:res.data
            })
        } catch(err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function registerUser({email,username,password}){
        try{
            const config = {
                headers:{
                    'Content-Type':'application/json'
                }
            }
            const body = JSON.stringify({email,username,password})
            const res = await axios.post('/auth/v1/',body,config)
            dispatch({
                type:'REGISTER_SUCCESS',
                payload:res.data
            })
        } catch (err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    return <GlobalContext.Provider value={{
        products:state.products,
        user:state.user,
        token:state.token,
        order:state.order,
        getProducts,
        loginUser,
        registerUser,
        isAuthenticated:state.isAuthenticated
        }}>
        {children}
    </GlobalContext.Provider>
}