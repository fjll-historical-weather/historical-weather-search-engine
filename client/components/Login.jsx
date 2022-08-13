//client/components/Login.jsx
import React from 'react'

const Login = (props) => {
    
    return(
        <div className="login-div">
            <form className="login-form">
                <h2>Login</h2>
                <input className="form-input" type="text" name="username" placeholder="Username"></input>
                <input className="form-input" type="password" name="password" placeholder="Password"></input>
                <input className = "submit-btn" type="submit" value="Login"></input>
            </form>
        </div>
    )
}

export default Login;