var routerMethods = {
    get: function (req, res, path, callback) {
        if (path === req.url && req.method === "GET") {
            callback(req, res);
        }
    },
    post: function (req, res, path, callback) {
        if (path === req.url && req.method === "POST") {
            callback(req, res);
        }
    },
};

module.exports = routerMethods;
