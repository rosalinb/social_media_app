// render functions for profile page

const { post } = require('../../../controllers/profiles_controller');

// renders own posts

function renderProfilePage() {
  // fetch('/api/profiles')
  //   .then((res) => res.json())
  //   .then((ownPosts) => {
  //     let ownPosts = ownPosts;
  //     // renderProfilePage();
  //   });
  if (state.loggedInUserName.avatar !== '') {
    document.querySelector('.entry-page-container').innerHTML = `
      <img class="avatar-mini" src="${state.loggedInUserName.avatar}" alt="User's avatar">
      <h2>Welcome ${state.loggedInUserName.userName}! This is your profile page</h2>
      <h3>About you:</h3>
      <p>${state.loggedInUserName.about_you}</p>  
      <button onclick="renderProfileDetailsChange()">Edit my details</button>
      <section id="own-posts"></section>`;
  } else {
    document.querySelector('.entry-page-container').innerHTML = `
      <span class="avatar-mini" onclick="renderProfileDetailsChange()">Update your Avatar!</span>
      <h2>Welcome ${state.loggedInUserName.userName}! This is your profile page</h2>
      <h3>About you:</h3>
      <p>${state.loggedInUserName.about_you}</p> if you want to change your details:, <button onclick="renderProfileDetailsChange()">Edit my details</button>
      <section id="own-posts"></section>`;
  }
  renderOwnPosts();
}

function renderProfileDetailsChange() {
  document.querySelector('#own-posts').innerHTML = `
    <h2>change details</h2>
    <section class="changeUserDetails">
      <form onSubmit="changeProfileDetails(event)">
        <input type="text" name="name" value="${state.loggedInUserName.userName}" readonly>
        <input type="text" name="email" value="${state.loggedInUserName.email}" readonly>
        <input type="text" name="avatar" placeholder="Upload your avatar">   
        <textarea rows="4" cols="16" name="about_you" placeholder="Tell us about you in 240 characters" maxlength="240"></textarea>
        <button>Change details</button>
      </form>
    </section>
  `;
}

function changeProfileDetails(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  fetch('/api/profiles', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(({ avatar, about_you }) => {
      state.loggedInUserName.avatar = avatar;
      state.loggedInUserName.about_you = about_you;
    })
    .then(() => renderProfilePage());
}

function renderOwnPosts() {
  const postsById = state.posts.filter(
    (element) => element.poster_user_id == state.loggedInUserName.userId
  );
  document.querySelector('#own-posts').innerHTML = `
    <h2>See your past activity</h2>
    <section><p>Hola</p>
    ${postsById[0].post}
    </section>
  `;
}
////// THIS FUNCTION NEEDS SOME TWEAKING

// function renderOwns() {

//   return postsById;
// }
//
post = [
  { id: 6, poster_id: '3', post: 'hola que tal' },
  { id: 3, poster_id: '3', post: 'hola3 que tal2' },
  { id: 4, poster_id: '2', post: 'hola2 que tal2' },
  { id: 5, poster_id: '3', post: 'hola3 3que tal5' },
];
