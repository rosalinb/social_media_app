const state = {
  posts: [],
  profile: [],
};

fetch('/api/profiles')
  .then((res) => res.json())
  .then((profile) => {
    state.profile = profile;
    // renderProfilePage();
  });

fetch('/api/posts')
  .then((res) => res.json())
  .then((posts) => {
    // state.loggedInUserName ? (state.posts = posts) : (state.posts = []);
    state.posts = posts;
    // renderPostsList();
    // header();
  });

//fetch API request to server, get responsed by the session cookie and save that to the browser and save it to the local storage.

renderAppHome();
