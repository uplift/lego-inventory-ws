module.exports = function isAuthenticated( req, res, next ) {
    if ( req.isAuthenticated() ) {
        return next();
    }
    res.status( 403 ).send( { "error": "User not logged in" } );
}
