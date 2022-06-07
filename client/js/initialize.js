const state = {
  posts: [],
  profile: [],
};

fetch("/api/profiles")
  .then((res) => res.json())
  .then((profile) => {
    state.profile = res;
    renderProfilePage();
  });

fetch("/api/posts")
  .then((res) => res.json())
  .then((posts) => {
    state.posts = posts;
    // renderPostsList();
    header();
  });

renderAppHome();
