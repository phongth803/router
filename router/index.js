var userRouter = require('./userRouter');

var router = {
    run: function(req, res) {
        userRouter.run(req, res);
    },
    get: function(req, res, path, callback) {
        if (path === req.url && req.method === 'GET') {
            callback(req, res);
        }
    }
};

module.exports = router;
