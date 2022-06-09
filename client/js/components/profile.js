function renderProfilePage() {
  if (state.loggedInUserName.avatar !== '') {
    document.querySelector('.entry-page-container').innerHTML = `
      <img class="avatar-mini" src="${
        state.loggedInUserName.avatar
      }" alt="User's avatar">
      <h2>Welcome ${
        state.loggedInUserName.userName
      }! This is your profile page</h2>
      <h3>About you:</h3>
      <p>${state.loggedInUserName.about_you}</p>  
      <button onclick="renderProfileDetailsChange()">Edit my details</button>
      <h3>See your posts!</h3>
      <section id="own-posts">${renderOwnPosts()}</section>`;
  } else {
    document.querySelector('.entry-page-container').innerHTML = `
      <span class="avatar-mini" onclick="renderProfileDetailsChange()">Update your Avatar!</span>
      <h2>Welcome ${
        state.loggedInUserName.userName
      }! This is your profile page</h2>
      <h3>About you:</h3>
      <p>${
        state.loggedInUserName.about_you
      }</p> if you want to change your details:, <button onclick="renderProfileDetailsChange()">Edit my details</button>
      <h3>See your posts!</h3>
      <section id="own-posts">${renderOwnPosts()}</section>`;
  }
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
      <button onclick="renderProfilePage()">I changed my mind</button>
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
  // return console.log(postsById);
  return postsById.map(
    (post) => `<p class="own-post">Posted on ${new Date()}</p><p>${
      post.post
    }</p>
    `
  );
}

function deleteOwnPost(event) {
  const deleteBtn = event.target;
  const ownPostDOM = deleteBtn.closest('.ownPost');
  // console.log(treasureDOM) this gives me the dom object that we are manipulating (the shole section, )
  const ownPostId = ownPostDOM.dataset.id;
  //dataset.id is getting the tag data-id
  // console.log(treasureId);
  //this is giving me which id im clicking
  fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
  }).then(() => {
    // this is removing just that one treasure from my state.treasures
    state.posts = state.posts.filter((t) => t.id != ownPostId);
    renderOwnPosts();
  });
}
////// THIS FUNCTION NEEDS SOME TWEAKING
// var localTime = new Date().toLocaleTimeString()
// function renderOwns() {

//   return postsById;
// }
//
// post = [
//   { id: 6, poster_id: '3', post: 'hola que tal' },
//   { id: 3, poster_id: '3', post: 'hola3 que tal2' },
//   { id: 4, poster_id: '2', post: 'hola2 que tal2' },
//   { id: 5, poster_id: '3', post: 'hola3 3que tal5' },
// ];
