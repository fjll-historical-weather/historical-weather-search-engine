//client/components/App.jsx

import React , {useState, useEffect} from 'react'; 
import { render } from 'react-dom';
import { Outlet } from 'react-router-dom';
import '../styles/styles.scss';
import Navbar from './Navbar.jsx';
import Searchbar from './Searchbar.jsx';


const App = props => {

    return (
        <main>
          <Navbar/>
          <Searchbar />
        </main>
    );
}

export default App; 

