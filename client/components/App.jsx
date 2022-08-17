//client/components/App.jsx

import React , {useState, useEffect} from 'react';
import '../styles/styles.scss';
import Navbar from './Navbar.jsx';
import Searchbar from './Searchbar.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import { Routes, Route } from "react-router-dom";


const App = props => {

  const [user, setUser] = useState('user');

    return (
      <Routes>
        <Route path="/" element={
          <main>
            <Navbar user={user} setUser={setUser} />
            <Searchbar user={user} setUser={setUser} />
          </main>
        } />
        <Route path="/signup" element={<Signup user={user} setUser={setUser} />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        {/* <Route path="/favorites" element={}/> */}
      </Routes>
    );
}

export default App; 

