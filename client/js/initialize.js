const state = {
  posts: [],
  likesArray: [],
  postsWithComments: [],
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

// fetch('/api/comments')
//   .then((res) => res.json())
//   .then((comments) => {
//     state.postsWithComments = comments;
//   });

renderAppHome();
