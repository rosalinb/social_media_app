CREATE DATABASE social_media_app;
\c social_media_app

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  avatar TEXT,
  name TEXT,
  email TEXT, 
  user_type TEXT,
  password_digest TEXT,
  about_you TEXT
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  poster_user_id INT,
  post TEXT,
  attachment TEXT
);

CREATE TABLE likes(
  id SERIAL PRIMARY KEY,
  post_id TEXT,
  like_user_id TEXT
);


CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  post_id TEXT,
  commenter_id INT,
  comments TEXT,
  time_stamp TEXT
  );