import React ,{useState} from 'react'


export const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return(
        <section>
            <h1>Sign In</h1>
            <form>
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
        </section>
    )
}