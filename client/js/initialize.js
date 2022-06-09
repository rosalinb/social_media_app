const state = {
  posts: [],
  likesArray: [],
};

fetch('/api/posts')
  .then((res) => res.json())
  .then((posts) => {
    state.posts = posts;
  });

fetch('/api/likes')
  .then((res) => res.json())
  .then((likes) => {
    state.likesArray = likes;
  });

renderAppHome();
