var datasource = require( '../../datasource/mongo' );
var _ = require( 'lodash' );

module.exports = function( app, middleware, passport ) {
    app.get( '/lego/app/inventory', function( req, res ) {
        datasource.findUserById( req.user._id, function( err, resp ) {
            var elements = _( resp ).pick( 'inventory' ).values().first();
            res.send( elements );
        });
    });
}
