var datasource = require( '../../datasource/mongo' );

module.exports = function( app, middleware, passport ) {
    app.get( '/lego/app/elements', function( req, res ) {
        datasource.findElements( function( err, resp ) {
            res.send( resp );
        });
    });

    app.get( '/lego/app/elements/:id', function( req, res ) {
        datasource.findElement( req.params.id, function( err, resp ) {
            res.send( resp );
        });
    });
}
