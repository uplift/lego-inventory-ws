module.exports = function isAdminAuthenticated( req, res, next ) {
    if ( req.isAuthenticated() && req.user.isAdmin ) {
        return next();
    }
    res.status( 403 ).send( { "error": "User not logged in" } );
}
