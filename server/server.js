//server/server.js
const path = require('path');
const express = require('express');

const PORT = 3000;

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'))
})



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
  
  module.exports = app;