//client/index.js

import React from 'react';
import App from './components/App.jsx';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

render (
    < App />, 
    document.getElementById('root')
); 