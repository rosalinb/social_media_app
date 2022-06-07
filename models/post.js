const db = require("../db/db")

const Post = {
  create: (poster_user_id, post, attachment) => {
    const sql = `
      INSERT INTO posts(poster_user_id, post, attachment)
      VALUES ($1, $2, $3)
      RETURNING *
    `
    return db
    .query(sql, [poster_user_id, post, attachment])
    .then(dbRes => dbRes.rows[0])
  }
}

module.exports = Post