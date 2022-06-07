//this page regulates the functions used in profiles_controller
const db = require('../db/db');

// need to be fed with the session.id to find the user data, render it and

const Profile = {
  getProfileInfo: (id) => {
    const sql = 'SELECT avatar, name, email, about_you FROM users WHERE $1';
    return db.query(sql, [id]).then((dbRes) => dbRes.rows)[0];
  },
};
// const User = {
//   user: user.id,
//   renderUserInformation: (user) => {
//     const sql = `
//       SELECT * FROM users
//       WHERE email = $1
//     `;

//     return db.query(sql, [email]).then((dbRes) => dbRes.rows[0]);
//   },
// };

module.exports = Profile;
