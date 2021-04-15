// Required Modules
require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');


// app.use settings
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

const buildPath = path.join(__dirname, '../build');
app.use(express.static(buildPath));

app.use(cors());
app.use(express.json());


// Methods for App
const controller = require('./app/controller');
app.use('/app', controller);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
});


// Server Stuff
const server = 'localhost';
const port = process.env.PORT;

// Port listen and message
app.listen(port);
// eslint-disable-next-line no-console
console.log(`listening on: http://${server}:${port}`);
