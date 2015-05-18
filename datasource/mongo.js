var MongoClient = require( 'mongodb' ).MongoClient;
var ObjectId = require( 'mongodb' ).ObjectId;
var dbConfig = require( '../config/database/db.js' );

var mongo = exports;

mongo.findElements = function( cb ) {
    MongoClient.connect( dbConfig.url, function( err, db ) {
        if ( err ) {
                return cb( err );
            }
        db.collection( 'elements' ).find().toArray( function( err, items ) {
            if ( err ) {
                return cb( err );
            }
            cb( null, items );
        } );
    });
};

mongo.findElement = function( id, cb ) {
    MongoClient.connect( dbConfig.url, function( err, db ) {
        if ( err ) {
            return cb( err );
        }
        db.collection( 'elements' ).findOne( { _id: id }, function( err, element ) {
            if ( err ) {
                return cb( err );
            }
            cb( null, element );
        } );
    });
};

mongo.findUserByUsername = function( username, cb ) {
    MongoClient.connect( dbConfig.url, function( err, db ) {
        if ( err ) {
            return cb( err );
        }
        db.collection( 'users' ).findOne( { username: username }, function( err, user ) {
            if ( err ) {
                return cb( err );
            }
            cb( null, user );
        } );
    });
};

mongo.findUserById = function( id, cb ) {
    MongoClient.connect( dbConfig.url, function( err, db ) {
        if ( err ) {
            return cb( err );
        }
        db.collection( 'users' ).findOne( { _id: new ObjectId( id ) }, function( err, user ) {
            if ( err ) {
                return cb( err );
            }
            cb( null, user );
        } );
    });
};
