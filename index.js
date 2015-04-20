// App Setup
var express = require( 'express' );
var app = express();
var middleware = require( './middleware/' );
var bodyParser = require( 'body-parser' );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

// Passport Setup
var passport = require( 'passport' );
var session = require( 'express-session' );
var FileStore = require( 'session-file-store' )( session );
app.use( session( {
    secret: '9852390+5629534=92880854387892',
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
} ) );
app.use( passport.initialize() );
app.use( passport.session() );

// Passport Init
require( './passport/' )( passport );

// Routes
require( './routes/login' )( app, middleware, passport );
require( './routes/app' )( app, middleware, passport );
require( './routes/admin' )( app, middleware, passport );

// Start server
var server = app.listen( 9999, function() {
    console.log( 'Listening on port %d', server.address().port );
});
