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

//fetch API request to server, get responsed by the session cookie and save that to the browser and save it to the local storage.

renderAppHome();
