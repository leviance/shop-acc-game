const express = require('express');
const router = express.Router();

const {auth_controllers} = require("../controllers/index");

function init_routes(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  router.post('/user-register', auth_controllers.user_register );

  // catch 404 and forward to error handler
  router.use(function(req, res, next) {
    // respond with html page
    return res.send('page not found');
  });

  return app.use('/', router);
}

module.exports = init_routes;