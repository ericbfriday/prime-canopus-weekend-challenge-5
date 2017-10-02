var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser');
var port = process.env.PORT || 8080;
var indexRoute = require('./modules/routes/indexrouter');
var realestateRoute = require('./modules/routes/realestate');

app.use( express.static( 'public' ) );
app.use(bodyParser.json());
app.use('/', indexRoute);
app.use('/realestate', realestateRoute);

app.listen( port, function(){
    console.log( 'server up on:', port );
});