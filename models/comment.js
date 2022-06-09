const db = require("../db/db")

const Comment = {
    findPost: () => {
        const sql = 'SELECT * FROM posts WHERE id = $1' 
        
        return db
        .query(sql)
        .then(dbRes => dbRes.rows)
    },

    create: (post_id, commenter_id, comment) => {
        const sql = `
        INSERT INTO comments(post_id, commenter_id , comment)
        VALUES ($1, $2, $3)
        RETURNING *
        `
        return db
        .query(sql, [post_id, commenter_id, comment])
        .then(dbRes => dbRes.rows)
    }
}

module.exports = Comment