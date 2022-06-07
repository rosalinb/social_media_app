const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

// models
const User = require("../models/user");

router.post("/", (req, res) => {
  const { avatar, name, email, user_type, password, about_you } = req.body;
  const passwordDigest = bcrypt.hashSync(
    password,
    bcrypt.genSaltSync(10),
    null
  );

  if (name.length < 2) {
    res.status(400).json({ error: "name shoud be at least 8 characters" });
  } else {
    User.create(avatar, name, email, user_type, passwordDigest, about_you).then(
      (userName) => res.json(userName)
    );
  }
});

module.exports = router;
