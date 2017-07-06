'use strict';

const express = require('express');
const bodyParser = require('body-parser');


const restService = express();
restService.use(bodyParser.json());

restService.post('/hook', function (req, res) {

    console.log('hook request');
    
    console.log(req);

});

restService.listen((process.env.PORT || 5000), function () {
    console.log("Server listening");
});
