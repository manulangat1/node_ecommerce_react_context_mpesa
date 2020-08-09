export default function(state,action){
    switch(action.type){
        case 'GET_PRODUCTS':
            return{
                ...state,
                products:action.payload
            }
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
            localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true
            }
        default:
            return state
    }
}