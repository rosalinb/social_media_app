const db = require('../db/db');

const Post = {
  findAll: () => {
    const sql = `
    SELECT posts.*, users.name, users.avatar, users.about_you FROM posts 
    INNER JOIN users
    ON users.id = posts.poster_user_id
    ORDER BY id DESC
    `;

    return db.query(sql).then((dbRes) => dbRes.rows);
  },

  create: (name, post, attachment, time_stamp) => {
    const sql = `
      INSERT INTO posts(poster_user_id, post, attachment, time_stamp)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    return db
      .query(sql, [name, post, attachment, time_stamp])
      .then((dbRes) => dbRes.rows[0]);
  },
  delete: (postId) => {
    const sql = `
      DELETE FROM posts WHERE id = $1
    `;
    return db.query(sql, [postId]);
  },
};

module.exports = Post;
