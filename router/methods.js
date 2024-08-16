const url = require("url");
var routerMethods = {
  get: function (req, res, path, callback) {
    if (path === url.parse(req.url, true).pathname && req.method === "GET") {
      callback(req, res);
    }
  },
  post: function (req, res, path, array, callback) {
    if (path === req.url && req.method === "POST") {
      let isContinute = true;
      array.forEach((element) => {
        if (element(req, res) === false) {
          isContinute = !isContinute;
        }
      });
      if (isContinute) {
        callback(req, res);
      }
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
