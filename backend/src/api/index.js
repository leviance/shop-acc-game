const express = require("express");
const router = express.Router();

const { home_validation, auth_validation } = require("../validation/index");

const { auth_controllers, home_controllers } = require("../controllers/index");

function init_routes(app) {
  router.post(
    "/user-register",
    auth_validation.register,
    auth_controllers.user_register
  );
  router.post(
    "/user-login",
    auth_validation.login,
    auth_controllers.user_login
  );

  router.get(
    "/get-home-page-user-data",
    home_controllers.get_home_page_user_data
  );

  router.get("/user-logout", home_controllers.user_logout);

  // catch 404 and forward to error handler
  router.use(function (req, res, next) {
    // respond with html page
    return res.send("page not found");
  });

  return app.use("/", router);
}

module.exports = init_routes;
