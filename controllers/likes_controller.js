const express = require("express");
const router = express.Router();

// models
const Like = require("../models/like");

router.post('/', (req, res) => {
  const like_user_id = req.session.userId
  const post_id = req.body.post_id


  Like
    .create(post_id, like_user_id)
    .then(like => res.json(like))
})

router.get("/", (req, res) => {
  Like
  .allLikes()
  .then((likes) => res.json(likes));
});

module.exports = router