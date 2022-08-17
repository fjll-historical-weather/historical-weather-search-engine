const mongoose = require('mongoose');
const Schema = mongoose.Schema;





// FIX: unique should be true in prod
const LocationSchema = new Schema({
  cityName: { type: mongoose.Schema.Types.String, required: true, index: true, unique: true },
  cityData: { type: Object, required: true }
});

const Location = mongoose.model('Location', LocationSchema);

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 30, default: Date.now }
});

const Session = mongoose.model('Session', sessionSchema);

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

const User = mongoose.model('User', userSchema);



module.exports = {Location, Session, User }