//add to server
// const profileController = require("./controllers/profiles_controller");

const express = require('express');
const router = express.Router();

const Profile = require('../models/profile');

router.get('/', (req, res) => {
  Profile.getProfileInfo(req.session.userId).then((res) =>
    res.json(res).then((res) => (state.profile = res))
  );
});

// })
router.put('/:id'),
  (req, res) => {
    // if (req.session.userId === state.loggedInUserName.userName) {
    const avatar = req.body.avatar;
    const about_you = req.body.about_you;
    const id = req.session.userId;

    Put.changeDetails(avatar, about_you, id).then((put) => res.json(put));
    // } else {
    // console.log('you are attemtping to change another user... and thats wrong');
  };
// };

// router.delete('/api/profiles/:id');

module.exports = router;
// module.exports = Profile;

// avatar TEXT,
//   name TEXT,
//   email TEXT,
//   user_type TEXT,
//   password_digest TEXT,
//   about_you TEXT
