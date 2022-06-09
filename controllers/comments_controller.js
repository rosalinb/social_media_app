const express = require("express");
const router = express.Router();

const Comment = require("../models/comment")

router.post('/', (req, res) => {
    console.log(req)

    Comment
    .findPost()
})


module.exports = router
