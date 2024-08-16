const { StatusCode } = require("../../utils");
function checkToken(req, res) {
  if (req.headers["authorization"]) {
    if (req.headers["authorization"].split(" ")[1] === "thisistoken") {
      return true;
    } else {
      res.writeHead(StatusCode.UNAUTHORIZED, { "Content-Type": "text/plain" });
      res.end("User khong hop le");
      return false;
    }
  } else {
    res.writeHead(StatusCode.UNAUTHORIZED, { "Content-Type": "text/plain" });
    res.end("User khong hop le");
    return false;
  }
}


module.exports = {
  checkToken,
};
