//server/server.js
const path = require('path');
const express = require('express');
const axios = require('axios');
const coreJsCompat = require('@babel/preset-env/data/core-js-compat');
const Controller = require('./controller');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


// const uri = 'mongodb+srv://starnose:9ADoo%aaZx6s@cluster0.slydjzd.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect('mongodb+srv://starnose:9ADoo%25aaZx6s@cluster0.slydjzd.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => console.log('Connected to database.'));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'))
})


const router = express.Router();
app.use('/', router);


// Get monthly weather data for a city
// http://localhost:3000/search
router.post('/search', Controller.getMonthlyData, (req, res, next) => {
    // console.log('res.locals in server.js: ', res.locals.weather);
    res.sendStatus(200);
    // .json(res.locals.weather);
});

router.get('/search', Controller.getAllData, (req, res, next) => {
    res.status(200);
})










// // user inputs a city name
// const cityName = 'Portland';





app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

module.exports = app;