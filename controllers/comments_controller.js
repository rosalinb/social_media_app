const express = require("express");
const router = express.Router();

const Comment = require("../models/comment")

router.post('/', (req, res) => {
    const post_id = req.session
    const commenter_id = req.session.userId
    const comment = req.body.comment

    Comment
    .findPost()
})