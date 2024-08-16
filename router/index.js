var userRouter = require('./userRouter');
var authenRouter = require('./authenticationRouter')

var router = {
    run: function(req, res) {
        userRouter.run(req, res);
        authenRouter.run(req, res);
    }
};

module.exports = router;
