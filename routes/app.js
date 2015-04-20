module.exports = function( app, middleware, passport ) {
    app.all( '/lego/app/*', middleware.isAuthenticated );

    require( './app/elements' )( app, middleware, passport );
    require( './app/inventory' )( app, middleware, passport );
}
