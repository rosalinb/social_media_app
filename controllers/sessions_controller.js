const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

//models
const User = require("../models/user");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email).then((user) => {
    const isValidPassword = bcrypt.compareSync(password, user.password_digest);
    if (user && isValidPassword) {
      req.session.userId = user.id;
      res.json({
        userId: user.id,
        userName: user.name,
        avatar: user.avatar,
        about_you: user.about_you,
        email: user.email,
      });
    }
  });
});

router.delete("/", (req, res) => {
  req.session.userId = undefined;
  // req.session.destroy();
  // res.clearCookie("user_sid");
  res.json({ message: "logout successfully" });
});

module.exports = router;
