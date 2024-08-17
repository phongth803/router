const url = require("url");
function runMiddleWares(req, res, middlewares) {
  let index = 0;
  function next(user) {
    if (index < middlewares.length - 1) {
      const middleware = middlewares[index];
      index++;
      middleware(req, res, next);
    } else if (index === middlewares.length - 1) {
      const controller = middlewares[index];
      controller(req, res, user);
    }
  }
  next();
}

var routerMethods = {
  get: function (req, res, path, middlewares) {
    if (path === url.parse(req.url, true).pathname && req.method === "GET") {
      runMiddleWares(req, res, middlewares);
    }
  },
  post: function (req, res, path, middlewares) {
    if (path === req.url && req.method === "POST") {
      runMiddleWares(req, res, middlewares);
    }
  },
  delete: function (req, res, path, callback) {
    if (path === url.parse(req.url, true).pathname && req.method === "DELETE") {
      callback(req, res);
    }
  },
  patch: function (req, res, path, callback) {
    if (path === url.parse(req.url, true).pathname && req.method === "PATCH") {
      callback(req, res);
    }
  },
};

module.exports = routerMethods;
