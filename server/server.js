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



mongoose.connect('mongodb+srv://starnose:9ADoo%25aaZx6s@cluster0.slydjzd.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => console.log('Connected to database.'));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'))
})

const router = express.Router();
app.use('/', router);

// Get monthly weather data for a city
// http://localhost:3000/search
router.post('/search', Controller.getMonthlyData, Controller.getData, (req, res, next) => {
    // sends info back in via middleware getData
});


//SIGNUP routes
router.post('/signup', userController.createUser, cookieController.setSSIDCookie, (req, res, err) => {
    // redirect happens in controllers
})

//LOGIN routes
router.post('/login', userController.verifyUser, cookieController.setSSIDCookie, (req, res, err) => {
    // redirects happens in controllers
    console.log('app.post login sucessful')
    res.send(res.locals);
})

//AUTHORIZED routes
app.get('/favorites', (req, res) => {

})

app.get('/favorites/users', userController.getAllUsers, (req, res) => {
    res.send({users: res.locals.users});
})

//404 Handler
app.use('*', (req, res) => {
    res.status(404).send('Not Found');
});

//Global Error Handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

module.exports = app;