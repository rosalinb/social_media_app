const db = require("../db/db")

const Post = {
  findAll: () => { 
    const sql = 'SELECT * FROM posts ORDER BY id DESC'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  create: (name, post, attachment) => {
    const sql = `
      INSERT INTO posts(poster_user_id, post, attachment)
      VALUES ($1, $2, $3)
      RETURNING *
    `
    return db
    .query(sql, [name, post, attachment])
    .then(dbRes => dbRes.rows[0])
  }
}

module.exports = Post