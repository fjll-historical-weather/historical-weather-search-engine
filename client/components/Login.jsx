//client/components/Login.jsx
import React from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        const username = e.target.firstChild.nextSibling.value; 
        const password = e.target.firstChild.nextSibling.nextSibling.value; 

        console.log('Login.jsx handlesubmit username: ', username)
        console.log('Login.jsx handlesubmit password: ', password)

        axios({
            method: 'POST', 
            url: 'http://localhost:3000/login', 
            data: { username, password}
        })
         .then(res => {
            console.log('Login.jsx .then res.data: ',res.data);
            navigate(`${res.data}`, {replace:true})
        });
    }

    return(
        <div className="login-div">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input className="form-input" type="text" name="username" placeholder="Username"></input>
                <input className="form-input" type="password" name="password" placeholder="Password"></input>
                <input className = "submit-btn" type="submit" value="Login"></input>
            </form>
        </div>
    )
}

export default Login;