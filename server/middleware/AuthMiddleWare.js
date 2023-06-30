const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  if (!accessToken) res.json({ error: "User not logged in" });
  else {
    try {
      const validToken = verify(accessToken, "importantdata");
      
      req.user = validToken;

      if (validToken) {
        return next();
      }
    } catch (err) {
      res.json({ error: err });
    }
  }
};

// note you cant export without bracket
module.exports = validateToken;
