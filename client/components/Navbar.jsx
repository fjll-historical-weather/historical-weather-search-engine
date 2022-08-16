//client/components/Navbar.jsx
import React from 'react'; 
import { Link } from 'react-router-dom';

const Navbar = props => {

  // if isLoggedIn = true, render x

  return (
    <div className="navbar">
      <Link to='/' className="submit-btn">Home</Link>
      <h1>Historial Climate Data</h1>
      <Link to='/signup' className="submit-btn">Signup</Link>
      <Link to='/login' className="submit-btn">Login</Link>
    </div>
  )

}

export default Navbar;