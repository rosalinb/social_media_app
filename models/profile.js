const db = require('../db/db');

const Profile = {
  getProfileInfo: (id) => {
    const sql =
      'SELECT avatar, name, email, about_you FROM users WHERE id = $1';
    return db.query(sql, [id]).then((dbRes) => dbRes.rows[0]);
  },

  changeDetails: (avatar, about_you, id) => {
    const sql = `
      UPDATE users
      SET avatar = $1, about_you = $2
      WHERE id = $3
      RETURNING *
    `;
    return db
      .query(sql, [avatar, about_you, id])
      .then((dbRes) => dbRes.rows[0]);
  },

  listOwnPosts: (userId) => {
    const sql = 'SELECT post, attachment FROM posts WHERE poster_user_id = $1';
    return db.query(sql, [userId]).then((dbRes) => dbRes.rows);
  },

  // delete: (postId) => {
  //   const sql = `
  //     DELETE FROM posts WHERE id = $1
  //   `;
  //   return db.query(sql, [postId]);
  // },
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
