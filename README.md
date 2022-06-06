DEPLOY TO HEROKU

Database
let db;
if (process.env.NODE_ENV === 'production') {
db = new pg.Pool({
connectionString: process.env.DATABASE_URL,
ssl: {
rejectUnauthorized: false
}
})
} else {
db = new pg.Pool({
database: 'social_media_app',
password: 'optional_password'
})
}

The password is for Linux users

Port
const port = process.env.PORT || 3000
