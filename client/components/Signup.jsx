//client/components/Signup.jsx
import React from 'react'

const Signup = (props) => {
    
    return(
        <div className="signup-div">
            <form className="signup-form">
                <h2>Signup</h2>
                <input className="form-input" type="text" name="username" placeholder="Username"></input>
                <input className="form-input" type="email" name="email" placeholder="E-mail"></input>
                <input className="form-input" type="password" name="password" placeholder="Password"></input>
                <input className="form-input" type="password" name="password" placeholder="Re-enter Password"></input>
                <input className = "submit-btn" type="submit" value="Signup"></input>
            </form>
        </div>
    )
}

export default Signup;