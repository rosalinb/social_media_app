const express = require("express");
const router = express.Router();

// models
const Post = require("../models/post");


router.post('/', (req, res) => {
  const name = req.body.name
  const post = req.body.post
  const attachment = req.body.attachment

  Post
    .create(name, post, attachment)
    .then(post => res.json(post))
})

router.get("/", (req, res) => {
  Post.findAll().then((posts) => res.json(posts));
});


// router.delete('/:id', (req, res) => {
//   const postId = req.params.id

//   Post
//     .delete(postId)
//     .then(() => res.json({message: 'deleted successfully'}))
// })


module.exports = router

