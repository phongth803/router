var router = require("../index.js");

var routes = require("../routes.js");
var getUsers = require("../../controller/users/index.js");

var userRouter = {
  run(req, res) {
    router.get(req, res, routes.user.value, getUsers(req, res));
  },
};

module.exports = userRouter;
