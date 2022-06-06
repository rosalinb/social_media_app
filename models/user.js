const db = require("../db/db")

const User = {
  findByEmail: (email) => {
    const sql = `
      SELECT * FROM users
      WHERE email = $1
    `

    return db
      .query(sql, [email])
      .then(dbRes => dbRes.rows[0])
  },

  create: (name, username, email, avatar, role, passwordDigest) => {
    const sql = `
      INSERT INTO users(name, username, email, avatar, role, password_digest) VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *
    `

    return db
      .query(sql, [name, username, email, avatar, role, passwordDigest])
      .then(dbRes => dbRes.rows[0].name)
  }
}

module.exports = User