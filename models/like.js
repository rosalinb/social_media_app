const db = require("../db/db")

const Like = {

  create: (post_id, like_user_id) => {
    const sql = `
      INSERT INTO likes(post_id, like_user_id)
      VALUES ($1, $2)
      RETURNING *
    `
    return db
    .query(sql, [post_id, like_user_id])
    .then(dbRes => dbRes.rows[0])
  },

  allLikes: {
}


module.exports = Like