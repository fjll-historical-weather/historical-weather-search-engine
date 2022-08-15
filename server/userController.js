//server/userController.js
const User = require('./userModel');
const fs = require('fs');
const userController = {};
const bcrypt = require('bcrypt');

/**
 * getAllUsers - retrieve all users from the database and stores it into res.locals
 * before moving on to next middleware.
 */
userController.getAllUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err)
      return next(
        'Error in userController.getAllUsers: ' + JSON.stringify(err)
      );

    // store retrieved users into res.locals and move on to next middleware
    res.locals.users = users;
    return next();
  });
};

/**
 * createUser - create and save a new User into the database.
 */
userController.createUser = (req, res, next) => {
  // write code here
  const { username, password } = req.body;
  if(!username || !password) return next('Missing username or password in userController.createUser');

  const hash = bcrypt.hashSync(password, 10);

  User.create({ username, password: hash }, (err, user) => {
    if(err) {
      return next({error: err});
    }else{
      res.locals.user = user._doc;
      return next()
    }
  })
 
};

/**
 * verifyUser - Obtain username and password from the request body, locate
 * the appropriate user in the database, and then authenticate the submitted password
 * against the password stored in the database.
 */
userController.verifyUser = (req, res, next) => {
  // write code here
  const { username, password } = req.body;
  //check against res.locals.users if username exists and password matches
  if (!username || !password)
    return next('Missing username or password in userController.verifyUser');

  User.findOne({ username }, (err, user) => {
    if (err) {
      return next('Error in userController.verifyUser: ' + JSON.stringify(err));
    } else if (!user) {
      res.redirect('/signup');
    } else {
      bcrypt.compare(password, user.password).then((result) => {
        if (!result) {
          res.redirect('/signup');
        } else {
          res.locals.user = user;
          return next();
        }
      });
    }
  }).catch((err) => {
    next({
      error: 'Error in userController.verifyUser: ' + JSON.stringify(err),
    });
  });
};

module.exports = userController;