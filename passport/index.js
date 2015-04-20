var LocalStrategy = require( 'passport-local' );
var datasource = require( '../datasource/mongo' );

module.exports = function( passport ) {
    passport.serializeUser(function( user, done ) {
        done( null, user );
    });

    passport.deserializeUser(function( user, done ) {
        done( null, user );
    });

    passport.use(new LocalStrategy(
        function( username, password, done ) {
            console.log( username + " - " + password );
            datasource.findUserByUsername( username.toLowerCase(), function( err, user ) {
                if ( err ) {
                    console.log( "ERROR! Finding user" );
                    console.log(err);
                    return done( err );
                }

                if ( !user ) {
                    return done( null, false, { message: 'Incorrect username.' } );
                }

                if ( password !== user.password ) {
                    return done( null, false, { message: 'Incorrect password.' });
                }
                return done( null, user );
            } );
        }
    ));
};
