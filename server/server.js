//server/server.js
const path = require('path');
const express = require('express');
const axios = require('axios');
const coreJsCompat = require('@babel/preset-env/data/core-js-compat');
const Controller = require('./controllers/controller');

const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));



// mongoose.connect(`mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@cluster0.txufs6f.mongodb.net/?retryWrites=true&w=majority`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: 'weatherApp'
// })
//     .then(() => console.log('Connected to Mongo DB.'))
//     .catch(err => console.log(err));

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
    // send response back to front-end and do redirect at frontend
    res.status(200).send();
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