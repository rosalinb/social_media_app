CREATE DATABASE social_media_app;
\c social_media_app

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  username TEXT,
  email TEXT,
  avatar TEXT,
  role TEXT,
  password_digest TEXT
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  poster_user_id TEXT,
  post TEXT,
  attachment TEXT
);

CREATE TABLE likes(
  id SERIAL PRIMARY KEY,
  post_id TEXT,
  like_user_id TEXT
);
