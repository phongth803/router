const url = require("url");
function runMiddleWare(){
  //dung de run middle ware tái sử dụng nhiều lần cho các thằng method khác
}
var routerMethods = {
  get: function (req, res, path, callback) {
    if (path === url.parse(req.url, true).pathname && req.method === "GET") {
      callback(req, res);
    }
  },
  post: function (req, res, path, middlewares) {
    if (path === req.url && req.method === "POST") {
      let index = 0;
      function next() {
        if (index < middlewares.length - 1) {
          const middleware = middlewares[index];
          index++;
          middleware(req, res, next);
        } else if (index === middlewares.length - 1) {
          const controller = middlewares[index];
          controller(req, res);
        }
      }
      next();
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
