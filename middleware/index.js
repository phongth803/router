const { StatusCode } = require("../utils");
const users = require("../data/user.json");
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
  checkToken,
};
