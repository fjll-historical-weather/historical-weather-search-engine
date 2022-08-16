//client/components/Navbar.jsx
import React , {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom';

const Navbar = props => {

  // if isLoggedIn = true, render x
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn)

  // useEffect(()=>{
  //   console.log('Navbar.jsx isLoggedIn: ', isLoggedIn)
  // }, [isLoggedIn])

  return (
    <div className="navbar">
      <Link to='/' className="submit-btn">Home</Link>
      <h1>Historical Climate Data</h1>
      {/* <Link to='/signup' className="submit-btn">Signup</Link> */}
      <Link to='/login' className="submit-btn">Signup/Login</Link>
      {isLoggedIn ? <Link to='/login' className="submit-btn">Logout</Link> : <div></div>} 
    </div>
  )

}

export default Navbar;