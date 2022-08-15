//client/components/Navbar.jsx
import React from 'react'; 
import { Link } from 'react-router-dom';

const Navbar = props => {

  return (
    <div className="navbar">
      <Link to='/' className="submit-btn">Home</Link>
      <h1>City Weather</h1>
      <Link to='/signup' className="submit-btn">Signup</Link>
      <Link to='/login' className="submit-btn">Login</Link>
    </div>
  )

}

export default Navbar;