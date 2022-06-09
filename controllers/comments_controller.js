const express = require("express");
const router = express.Router();

const Comment = require("../models/comment")

router.post('/', (req, res) => {
    console.log(req)
    const post_id = req.body.post_id
    const commenter_id = req.session.userId
    const comment = req.body.comments


    Comment
    .create(post_id, commenter_id, comment)
    .then(comments => res.json(comments))
})

router.get("/", (req, res) => {
    Comment
    .findAll()
    .then((comments) => res.json(comments));
  });
  

module.exports = router
