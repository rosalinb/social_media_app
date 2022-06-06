const express = require('express')
const router = express.Router()

// models
const Post = require('../models/post')

router.get('/', (req, res) => {
  Post
  .findAll()
  .then(posts => res.json(posts))
})

// router.post('/', (req, res) => {
//   const name = req.body.name
//   const clue = req.body.clue
//   const address = req.body.address

//   Post
//     .create(name, clue, address)
//     .then(post => res.json(post))
// })

// router.delete('/:id', (req, res) => {
//   const postId = req.params.id

//   Post
//     .delete(postId)
//     .then(() => res.json({message: 'deleted successfully'}))
// })

// module.exports = router