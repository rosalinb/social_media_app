const db = require("../db/db")

const Comment = {
    findAll: () => {
        const sql = `
        SELECT posts.*, comments.commenter_id, comments
        FROM posts
        INNER JOIN comments
        ON posts.id = comments.post_id
        ` 
        
        return db
        .query(sql)
        .then(dbRes => dbRes.rows)
    },

    create: (post_id, commenter_id, comments) => {
        const sql = `
        INSERT INTO comments(post_id, commenter_id , comments)
        VALUES ($1, $2, $3)
        RETURNING *
        `
        return db
        .query(sql, [post_id, commenter_id, comments])
        .then(dbRes => dbRes.rows[0])
    }
}

module.exports = Comment