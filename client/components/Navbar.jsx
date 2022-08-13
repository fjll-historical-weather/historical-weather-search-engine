//client/components/Navbar.jsx

import React from 'react'; 
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

const Navbar = props => {

  return (
    <div className="navbar">
      <button className="submit-btn">Home</button>
      <h1>City Weather</h1>
      <button className="submit-btn">Login/Sign Up</button>
    </div>
  )

}

export default Navbar;