var routerMethods = require("../methods");

var routes = require("../routes.js");
const {
  createTask,
  getTaskList,
  deleteTask,
  handleNotFound,
  updateTask,
} = require("../../controller/task");

var userRouter = {
  run(req, res) {
    routerMethods.get(req, res, routes.tasks.value, getTaskList);
    routerMethods.post(req, res, routes.tasks.value, createTask);
    routerMethods.delete(req, res, routes.tasks.value, deleteTask);
    routerMethods.patch(req, res, routes.tasks.value, updateTask);
  },
};

module.exports = userRouter;
