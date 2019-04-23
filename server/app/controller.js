const express = require('express');
const Model = require('./model');

var model = new Model();

const app = express.Router();

app.post('/sendMessage', (req, res) => {
    model.sendMessage(
        req.body.name, req.body.email, req.body.phoneNumber, req.body.message,
        emailResponce => res.send(emailResponce)
    );
})


module.exports = app;