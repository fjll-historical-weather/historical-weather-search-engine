//server/cookieController.js

const cookieController = {};

/*
 * setSSIDCookie - store the user id in a cookie
 */
cookieController.setSSIDCookie = (req, res, next) => {
  // console.log('res.locals.user is: ', res.locals.user);
  if (res.locals.user) {
    console.log('cookieController.setSSIDCookie res.locals.user._id.id: ', res.locals.user._id.id )
    res.cookie('ssid', res.locals.user._id.id, {httpOnly: true});
    return next();
  } else {
    return next();
  }

};

module.exports = cookieController;