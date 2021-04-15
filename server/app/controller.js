const express = require('express');
const Model = require('./model');

let model = new Model();

const app = express.Router();

app.post('/sendMessage', (req, res) => {
    model.sendMessage(
        req.body.name, req.body.email, req.body.phoneNumber, req.body.message,
        emailResponse => res.status(emailResponse.status || 500).send(emailResponse.data)
    );
})


module.exports = app;
