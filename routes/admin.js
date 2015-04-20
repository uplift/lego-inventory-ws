module.exports = function( app, middleware, passport ) {
    app.all( '/lego/admin/*', middleware.isAdminAuthenticated );

    app.post( '/lego/admin/element', function( req, res ) {
        res.send( {} );
    });
}
