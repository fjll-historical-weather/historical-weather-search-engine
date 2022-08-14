//server/sessionController.js
const Session = require('./sessionModel');
sessionController = {}

sessionController.isLoggedIn = (req, res, next) => {
    // write code here
    Session.findOne({cookieId: req.cookies.ssid}, (err, session) => {
      if(err){
        return next('Error in sessionController.isLoggedIn: ' + JSON.stringify(err));
      }else if(!session){
        res.redirect('/signup');
      }else{
        return next()
      }
    })
  
  };
  
  /**
  * startSession - create and save a new Session into the database.
  */
  sessionController.startSession = (req, res, next) => {
    //write code here
    Session.create({cookieId: res.locals.user._id.id}, (err, session) => {
      if(err) return next('Error in sessionController.startSession: ' + JSON.stringify(err));
      else return next();
    });
  };
  
  module.exports = sessionController;