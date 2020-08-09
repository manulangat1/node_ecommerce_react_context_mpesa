import React ,{useState,useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import {Redirect } from 'react-router-dom'

export const Register = () => {
    const { isAuthenticated,registerUser } = useContext(GlobalContext)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [username,setUsername] = useState('')
    const [rpassword,setRpassword] = useState('')
    const onSubmit = e => {
        e.preventDefault()
        if (password !== rpassword){
            alert("Password need to be same")
        } else{
            const newUser = {
                email,
                username,
                password
            }
            registerUser(newUser)
        }
    }
    // if(isAuthenticated){
    //     <Redirect to="/" />
    // }
    return(
        <section>
            <h1>Sign Up</h1>
            <form onSubmit={onSubmit}>
                    <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
                </div>
                <div>
                    <label>Repeat Password</label>
                    <input type="password" name="rpassword" value={rpassword} onChange={(e) => setRpassword(e.target.value)} className="form-control" required />
                </div>
                <input type="submit" value="LOg in" />
            </form>
        </section>
    )
}