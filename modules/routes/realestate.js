var express = require('express');
var router = require('express').Router();
// var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require( 'body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

// first line will connect with DB hosted on mlab, second on local machine. Note that second line requires the 'new'
// GET POST routes as shown in realestate.service.js.
// mongoose.connect('mongodb://USERNAME:PASSWORD@ds157614.mlab.com:57614/heroku_lxv3p541', { useMongoClient: true });
mongoose.connect('mongodb://localhost:27017/realestate', { useMongoClient: true });

var realEstateSchema = new mongoose.Schema({
    rent: Number,
    cost: Number,
    sqft: Number,
    city: String
});

var realEstateModel = mongoose.model('listings', realEstateSchema);

router.get('/', function(req, res){
    // console.log('/realestate GET call -> logging RES -> ', res);
    realEstateModel.find()
    .then(function (data) {
        // console.log('in GET logging data -> ', data);
        
        res.send(data);
    });
});

router.post('/', function(req, res){
    // console.log('/realestate POSTING -> ', req.body);

    var realEstateToAdd = {
        rent: req.body.rent,
        cost: req.body.cost,
        sqft: req.body.sqft,
        city: req.body.city
    };
    // console.log('logging realestate.js REQ.BODY -> ', req.body);
    var newRealEstate = realEstateModel(realEstateToAdd);
    // console.log(newRealEstate);
    newRealEstate.save(function(error){
        if (error){
            // console.log(error);
            res.sendStatus(500);
        }else{
            res.sendStatus(201);
        }
    });
});

module.exports = router;
