import React ,{useState} from 'react'


export const Register = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [username,setUsername] = useState('')
    return(
        <section>
            <h1>Sign Up</h1>
            <form>
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
                <input type="submit" value="LOg in" />
            </form>
        </section>
    )
}