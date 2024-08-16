var routerMethods = require("../methods");
const middleware = require("../../controller/middleware");


var routes = require("../routes.js");
const { taskController } = require("../../controller");
var userRouter = {
    run(req, res) {
      routerMethods.get(req, res, routes.tasks.value, taskController.getTaskList, middleware.checkToken);
      routerMethods.post(req, res, routes.tasks.value, [middleware.checkToken, taskController.createTask]);
      routerMethods.delete(req, res, routes.tasks.value, taskController.deleteTask, middleware.checkToken);
      routerMethods.patch(req, res, routes.tasks.value, taskController.updateTask, middleware.checkToken);
    },
};
module.exports = userRouter;





