module.exports = function loginRoutes( app, middleware, passport ) {
    app.post( '/lego/login', function( req, res, next ) {
        passport.authenticate( 'local', function( err, user, infor ) {
            if ( err ) {
                return res.status( 400 ).send( {} );
            }

            if ( !user ) {
                return res.status( 401 ).send( { "type": 1, "message": "An invalid username or password has been entered. Please retry." } );
            }
            req.login( user, function( err ) {
                if ( err ) { return next( err ); }
                return res.send( {} );
            });
        })( req, res, next );
    });

    app.get( '/lego/login', middleware.isAuthenticated, function( req, res, next ) {
        res.send( {} );
    });

    app.post( '/lego/logout', function( req, res, next ) {
        if ( req.isAuthenticated() ) {
            req.logout();
        }
        res.send( {} );
    });
}
