const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// models
const User = require('../models/user')

router.post('/', (req, res) => {
  const {name, username, email, avatar, role, password} = req.body
  const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

  if(name.length < 8) {
    res.status(400).json({error: 'name shoud be at least 8 characters'})
  } else {
    User
    .create(name, username, email, avatar, role, passwordDigest)
    .then(userName => res.json(userName))
  }
 
})

module.exports = router