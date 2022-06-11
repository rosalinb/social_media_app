const db = require('../db/db');

const User = {
  findByEmail: (email) => {
    const sql = `
      SELECT * FROM users
      WHERE email = $1
    `;

    return db.query(sql, [email]).then((dbRes) => dbRes.rows[0]);
  },

  create: (avatar, name, email, user_type, passwordDigest, about_you) => {
    const sql = `
      INSERT INTO users(avatar, name, email, user_type, password_digest, about_you) VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;

    return db
      .query(sql, [avatar, name, email, user_type, passwordDigest, about_you])
      .then((dbRes) => dbRes.rows[0].name);
  },
  findUserIdByEmail: (email) => {
    const sql = `
        SELECT id FROM users
        WHERE email = $1
    `;

    return db.query(sql, [email]).then((dbRes) => {
      return dbRes.rows[0];
    });
  },
};

module.exports = User;
