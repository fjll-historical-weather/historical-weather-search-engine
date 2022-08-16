0//client/components/Signup.jsx
import React from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';

const Signup = (props) => {
    
    //when signup button is clicked
    //POST request to '/signup' endpoint
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
       
        const username = e.target.firstChild.nextSibling.value;
        const password = e.target.firstChild.nextSibling.nextSibling.value;
        //console.log('Signup.jsx handleSubmit username: ', username);
        //console.log('Signup.jsx handleSubmit password: ', password);
        axios({
            method: 'POST',
            url: 'http://localhost:3000/signup',
            data: {username, password} 
        })
        .then(navigate('/', {replace:true}))
    }
    return(
        <div className="signup-div">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Signup</h2>
                <input className="form-input" type="text" name="username" placeholder="Username"></input>
                <input className="form-input" type="password" name="password" placeholder="Password"></input>
                <input className = "submit-btn" type="submit" value="Signup"></input>
                <Link to="/login">Already have an account? Click here!</Link>
            </form>
        </div>
    )
}

export default Signup;