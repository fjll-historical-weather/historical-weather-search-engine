//client/components/App.jsx

import React from 'react'; 
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/styles.scss';
import Navbar from './Navbar.jsx';
import Searchbar from './Searchbar.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';


const App = props => {

    return (
        <main>
          <Navbar/>
          <Searchbar/>
          <Signup />
          <Login />
        </main>
    );
}

export default App; 

