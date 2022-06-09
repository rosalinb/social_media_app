const express = require('express');

//middlewares
const logger = require('./middlewares/logger');
const sessions = require('./middlewares/sessions');

//controllers
const postsController = require('./controllers/posts_controller');
const usersController = require('./controllers/users_controller');
const sessionsController = require('./controllers/sessions_controller');
const profilesController = require('./controllers/profiles_controller');
const likesController = require('./controllers/likes_controller');
const commentController = require('./controllers/comments_controller')

const app = express();
const port = process.env.PORT || 3000;

// start the server
app.listen(port, () => console.log(`listening on port ${port}`));

app.use(logger);

app.use(express.static('client'));

app.use(express.json());

app.use(sessions);

app.use('/api/posts', postsController);
app.use('/api/users', usersController);
app.use('/api/sessions', sessionsController);
app.use('/api/profiles', profilesController);
app.use('/api/likes', likesController);
app.use('/api/comments', commentController)