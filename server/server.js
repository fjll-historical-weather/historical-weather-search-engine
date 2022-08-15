//server/server.js
const path = require('path');
const express = require('express');
const axios = require('axios');
const coreJsCompat = require('@babel/preset-env/data/core-js-compat');
const Controller = require('./controller');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const userController = require('./userController');
const cookieController = require('./cookieController');
const sessionController = require('./sessionController');

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


//SIGNUP routes
app.get('/signup', (req,res) => {
    //go to signup page
});

app.post('/signup', userController.createUser, cookieController.setSSIDCookie, (req, res, err) =>{
    //successful sign up, redirect to '/favorites'
    //else, redirect back to '/signup'
})

//LOGIN routes
app.post('/login', userController.verifyUser, cookieController.setSSIDCookie, (req, res, err) =>{
    //success should redirect to '/favorites'
    //else, redirect to '/signup'
})

//AUTHORIZED routes
app.get('/favorites', (req, res) => {
    
})

app.get('/favorites/users', userController.getAllUsers, (req, res) => {
    //res.send({users: res.locals.users});
})

//404 Handler
app.use('*', (req,res) => {
    res.status(404).send('Not Found');
  });

//Global Error Handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
});







// // user inputs a city name
// const cityName = 'Portland';





app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

module.exports = app;