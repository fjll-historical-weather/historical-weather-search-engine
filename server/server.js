//server/server.js
const path = require('path');
const express = require('express');
const axios = require('axios');

const PORT = 3000;

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'))
})


axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=London&key=AIzaSyBtfcxOznbnQFJHSdQTgsSZVRbvpOZNdKU')
    // .then(res => console.log(res.results[0].geometry.location));
    .then(res => console.log(res.data.results[0].geometry.location));


// {
//     "results" : [
//         {
//             "address_components": [
//                 {
//                     "long_name": "London",
//                     "short_name": "London",
//                     "types": ["locality", "political"]
//                 },
//                 {
//                     "long_name": "London",
//                     "short_name": "London",
//                     "types": ["postal_town"]
//                 },
//                 {
//                     "long_name": "Greater London",
//                     "short_name": "Greater London",
//                     "types": ["administrative_area_level_2", "political"]
//                 },
//                 {
//                     "long_name": "England",
//                     "short_name": "England",
//                     "types": ["administrative_area_level_1", "political"]
//                 },
//                 {
//                     "long_name": "United Kingdom",
//                     "short_name": "GB",
//                     "types": ["country", "political"]
//                 }
//             ],
//             "formatted_address": "London, UK",
//             "geometry": {
//                 "bounds": {
//                     "northeast": {
//                         "lat": 51.6723432,
//                         "lng": 0.148271
//                     },
//                     "southwest": {
//                         "lat": 51.38494009999999,
//                         "lng": -0.3514683
//                     }
//                 },
//                 "location": {
//                     "lat": 51.5072178,
//                     "lng": -0.1275862
//                 },
//                 "location_type": "APPROXIMATE",
//                 "viewport": {
//                     "northeast": {
//                         "lat": 51.6723432,
//                         "lng": 0.148271
//                     },
//                     "southwest": {
//                         "lat": 51.38494009999999,
//                         "lng": -0.3514683
//                     }
//                 }
//             },
//             "place_id": "ChIJdd4hrwug2EcRmSrV3Vo6llI",
//             "types": ["locality", "political"]
//         }
//     ],
//         "status" : "OK"
// }

// Get nearby stations from coordinates
// let options = {
//     method: 'GET',
//     url: 'https://meteostat.p.rapidapi.com/stations/nearby',
//     params: { lat: '51.5085', lon: '-0.1257' },
//     headers: {
//         'X-RapidAPI-Key': 'ca2594298amsh94fb12fd4497783p1553c7jsn3ff6ba05d679',
//         'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
//     }
// };

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

// Get monthly station data from station ID
// options = {
//     method: 'GET',
//     url: 'https://meteostat.p.rapidapi.com/stations/monthly',
//     params: { station: '10637', start: '2020-01-01', end: '2020-12-31' },
//     headers: {
//         'X-RapidAPI-Key': '486cee67b7msh6fe5f060a910d1ap176ef4jsncf8e8f8d110e',
//         'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
//     }
// };

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

module.exports = app;