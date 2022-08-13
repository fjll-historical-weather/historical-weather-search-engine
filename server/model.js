const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  cityName: { type: mongoose.Schema.Types.String, required: true, index: true, unique: true },
  cityData: { type: Object, required: true }
});

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location; 