var routerMethods = require("../methods.js");
const middleware = require("../../middleware/index.js");

var routes = require("../routes.js");
const { taskController } = require("../../controller/index.js");
var userRouter = {
  run(req, res) {
    routerMethods.get(req, res, routes.tasks.value, [
      middleware.checkToken,
      taskController.getTaskList,
    ]);
    routerMethods.post(req, res, routes.tasks.value, [
      middleware.checkToken,
      taskController.createTask,
    ]);
    routerMethods.delete(
      req,
      res,
      routes.tasks.value,
      taskController.deleteTask,
      middleware.checkToken
    );
    routerMethods.patch(
      req,
      res,
      routes.tasks.value,
      taskController.updateTask,
      middleware.checkToken
    );
  },
};
module.exports = userRouter;
