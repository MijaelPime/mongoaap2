const express = require('express');
const router = express.Router();
const places = require("./places");

//router.use('/places', places);

router.all('/', function (request, response){
    response.json({
        "places":`http://localhost${process.env.PORT}/api/places`
    })
})

module.exports = router;