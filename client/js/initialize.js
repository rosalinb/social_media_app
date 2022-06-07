const state = {
  posts: [],
  state: {},
};

// fetch("/api/profile")
//   .then((res) => res.json())
//   .then((profile) => {
//     state.profile = profile;
//     renderProfile();
//   });


fetch('/api/posts')
  .then((res) => res.json())
  .then((posts) => {
    state.posts = posts;
    // renderPostsList();
    header();
  });

