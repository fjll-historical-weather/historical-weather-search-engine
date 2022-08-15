const axios = require('axios');
const Location = require('./model.js')

const Controller = {

  getData(req, res, next) {
    const cityName = res.locals.cityName;
    Location.findOne({ cityName }, (err, location) => {
      // console.log('found location is: ', location);
      res.send(location);
      return next();
    })
  },

  getMonthlyData(req, res, next) {
    const cityName = req.body.city;
    res.locals.cityName = cityName;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=AIzaSyBtfcxOznbnQFJHSdQTgsSZVRbvpOZNdKU`;
    // Get coordinates from city name
    axios.get(url)
      .then(res => {
        const coordinates = { lat: res.data.results[0].geometry.location.lat, lon: res.data.results[0].geometry.location.lng } // returns { lat: 51.5, lon: -0.127 }r
        console.log('coordinates are: ', coordinates);
        // Get nearby stations from coordinates
        const options = {
          method: 'GET',
          url: 'https://meteostat.p.rapidapi.com/stations/nearby',
          params: coordinates, // { lat: 51.5, lng: -0.127 }
          headers: {
            'X-RapidAPI-Key': 'ca2594298amsh94fb12fd4497783p1553c7jsn3ff6ba05d679',
            'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
          }
        };
        // Get nearby stations from coordinates
        axios.request(options)
          .then(res => {
            // console.log('stations data: ');
            const stationID = res.data.data[0].id; // 03779

            const options = {
              method: 'GET',
              url: 'https://meteostat.p.rapidapi.com/stations/monthly',
              params: { station: stationID, start: '2020-01-01', end: '2020-12-31', units: 'imperial' },
              headers: {
                'X-RapidAPI-Key': '486cee67b7msh6fe5f060a910d1ap176ef4jsncf8e8f8d110e',
                'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
              }
            };
            // get the monthly station data from station id
            axios.request(options)
              .then(res => {
                // console.log('monthly station data: ')
                // console.log(res.data.data);
                const newLocation = new Location({
                  cityName,
                  cityData: res.data.data
                })
                newLocation.save((err, location) => {
                  if (err) return next(err)
                  else {
                    console.log('saved location is:', location)
                    return next();
                  }
                })
              })
          })
      })
  }




}

module.exports = Controller;