var taskRouter = require("./taskRouter");
var userRouter = require("./userRouter");

var router = {
  run: function (req, res) {
    taskRouter.run(req, res);
    userRouter.run(req, res);
  },
};

module.exports = router;
