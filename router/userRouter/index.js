var routerMethods = require("../methods");

var routes = require("../routes.js");
var getUsers = require("../../controller/users/index.js");

var userRouter = {
  run(req, res) {
    routerMethods.get(req, res, routes.user.value, getUsers);
    routerMethods.post(req, res, routes.user.value, getUsers);
  },
};

module.exports = userRouter;
