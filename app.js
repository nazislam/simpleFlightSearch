const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const flights = require('./flight-docs/flight-sample');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    next();
  });
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/fetchFlight', (req, res) => {
    const data = req.body;

    const flightNumber = data.flightNumber;
    const origin = data.origin;
    const destination = data.destination;
    const date = data.departure;

    flights.forEach(flight => {
        if ((flight.flightNumber === flightNumber || (flight.origin === origin && flight.destination === destination)) && flight.departure === date) {
            res.json(flight);
        }
    });
});

app.listen(port, () => {
    console.log('Server is running on port', port);
});