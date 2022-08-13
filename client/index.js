//client/index.js

import React from 'react';
import App from './components/App.jsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    < App />
); 