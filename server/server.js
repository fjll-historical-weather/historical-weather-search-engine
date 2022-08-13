//server/server.js
const path = require('path');
const express = require('express');
const axios = require('axios');
const coreJsCompat = require('@babel/preset-env/data/core-js-compat');
const Controller = require('./controller');
const cors = require('cors');

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'))
})


const router = express.Router();
app.use('/', router);


// Get monthly weather data for a city
// http://localhost:3000/search
router.post('/search', Controller.getMonthlyData, (req, res, next) => {
    console.log('res.locals in server.js: ', res.locals.weather);
    res.sendStatus(200);
    // .json(res.locals.weather);
});












// // user inputs a city name
// const cityName = 'Portland';





app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

module.exports = app;