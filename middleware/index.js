const { StatusCode } = require("../utils");
const users = require("../data/user.json");

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

function checkToken(req, res, next) {
  const token = req.headers["authorization"] ? req.headers["authorization"].split(" ")[1] : null;
  const user = users.find((user) => user.username === token);
  if (user) {
    next(token);
  } else {
    res.writeHead(StatusCode.UNAUTHORIZED, { "Content-Type": "text/plain" });
    res.end("User không hợp lệ");
  }
}

module.exports = {
  runMiddleWares,
  checkToken,
};
