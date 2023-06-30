const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Users } = require("../models");
const { sign } = require("jsonwebtoken");
const validateToken = require("../middleware/AuthMiddleWare");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("Success passwords stored as Hash");
  });
  // second parameter is kind of related to time more the value stronger the hashing hence more the time taken
});

// Note how we made new variable in request
router.get("/verify", validateToken, (req, res) => {
  res.json(req.user);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });
  if (!user) res.json({ error: "User does not exist" });
  else {
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({ error: "Wrong username/password" });
      } else {
        const accessToken = sign(
          { username: user.username, id: user.id },
          "importantdata"
        );
        res.json({ token: accessToken, username: username, id: user.id });
      }
    });
  }
});

module.exports = router;

// note hashing again wouldnt give back original string what we can do is pass original string again and check if the hashing value is same or not

// we are going to use bcrypt to hash the passwords
