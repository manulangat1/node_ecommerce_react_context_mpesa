import React ,{useState,useContext} from 'react'
import { GlobalContext} from '../../context/GlobalState'
import { Redirect } from 'react-router-dom'
export const Login = () => {
    const { loginUser,isAuthenticated} = useContext(GlobalContext)
    const [email,setEmail] = useState('')
    console.log(isAuthenticated)
    const [password,setPassword] = useState('')
    const onSubmit = e => {
        e.preventDefault()
        loginUser(email,password)
    }
    if (isAuthenticated){
        console.log("auth")
        return <Redirect to="/" />
    }
    return(
        <section>
            <div className="container">
            <h1>Sign In</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
                </div>
                <input type="submit" value="LOg in" />
            </form>
            </div>
        </section>
    )
}