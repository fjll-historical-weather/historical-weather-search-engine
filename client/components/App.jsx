//client/components/App.jsx

import React from 'react'; 
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/styles.scss';
import Navbar from './Navbar.jsx';
import Searchbar from './Searchbar.jsx';
import CardContainer from './CardContainer.jsx';


const App = props => {

    return (
        <main>
          <Navbar/>
          <Searchbar/>
          <CardContainer />
        </main>
    );
}

export default App; 

