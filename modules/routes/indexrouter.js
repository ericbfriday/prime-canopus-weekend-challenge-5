var router = require('express').Router();
var path = require('path');

router.get('/', function(req, res){
    // console.log('base url');
    var index = path.resolve('public/index.html');
    res.sendFile(index);
});

module.exports = router;