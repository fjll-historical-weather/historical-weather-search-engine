//server/server.js
const path = require('path');
const express = require('express');
const axios = require('axios');
const coreJsCompat = require('@babel/preset-env/data/core-js-compat');

const PORT = 3000;

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'))
})

// user inputs a city name
const cityName = 'Portland';

const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=AIzaSyBtfcxOznbnQFJHSdQTgsSZVRbvpOZNdKU`;
// Get coordinates from city name
axios.get(url)
    .then(res => {
        const coordinates = { lat: res.data.results[0].geometry.location.lat, lon: res.data.results[0].geometry.location.lng } // returns { lat: 51.5, lon: -0.127 }
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
                axios.request(options)
                    .then(res => {
                        console.log('monthly station data: ')
                        console.log(res.data.data);
                    })
            })
    })



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

module.exports = app;