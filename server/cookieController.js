//server/cookieController.js

const cookieController = {};

/**
 * setCookie - set a cookie with a random number
 */
cookieController.setCookie = (req, res, next) => {
  // write code here
  const cookie = req.cookie;
  if(cookie === undefined){
  //if there is not cookie, create one
  const randomNum = Math.floor(Math.random() * 100);
  res.cookie('secret', randomNum);
  next();
  }else{
    //cookie exists
    console.log('setCookie: Cookie exists: ', cookie);
    next();
  }
};

/*
 * setSSIDCookie - store the user id in a cookie
 */
cookieController.setSSIDCookie = (req, res, next) => {

  res.cookie('ssid', res.locals.user._id.id, {httpOnly: true});
  return next();

};

module.exports = cookieController;