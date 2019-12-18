(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const chatRoutes = require('../routes/chat');
    // *** register routes *** //
    app.use('/', routes);
    app.use('/chat', chatRoutes);

  };

})(module.exports);
