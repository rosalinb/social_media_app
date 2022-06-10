function renderProfilePage() {
  if (state.loggedInUserName.avatar !== '') {
    document.querySelector('.entry-page-container').innerHTML = `
      <img class="loggedin-user-avatar" src="${
        state.loggedInUserName.avatar
      }" alt="User's avatar">
      <h2>Welcome ${state.loggedInUserName.userName}!</h2>
      <h3>My profile info:</h3>
      <p>${state.loggedInUserName.about_you}</p> 

      <button class="profile-edit-button" onclick="renderProfileDetailsChange()"><i class="fa fa-edit"></i>Edit Profile</button>
      <h3>My tweets</h3>
      <section id="own-posts">${renderOwnPosts()}</section>`;
  } else {
    document.querySelector('.entry-page-container').innerHTML = `
      <span class="avatar-mini" onclick="renderProfileDetailsChange()">Update your Avatar!</span>
      <h2>Welcome ${state.loggedInUserName.userName}!</h2>
      <h3>My profile info:</h3>
      <p>${state.loggedInUserName.about_you}</p> 

      <button class="profile-edit-button" onclick="renderProfileDetailsChange()"><i class="fa fa-edit"></i>Edit Profile</button>

      <h3>My tweets</h3>
      <section id="own-posts">${renderOwnPosts()}</section>`;
  }
}

function renderProfileDetailsChange() {
  document.querySelector('#own-posts').innerHTML = `
    <h2>change details</h2>
    <section class="changeUserDetails">
    <div class="edit-profile-info-form">
      <form onSubmit="changeProfileDetails(event)">
        <div>
          <input type="text" name="name" value="${state.loggedInUserName.userName}" readonly>
        </div>
        <div>
          <input type="text" name="email" value="${state.loggedInUserName.email}" readonly>
        </div>
        <div>
          <input type="text" name="avatar" value="${state.loggedInUserName.avatar}" placeholder="update your avatar">
        </div>
        <div>    
          <input name="about_you" value="${state.loggedInUserName.about_you}" placeholder="update about you"></input>
        </div>
        <button>Change details</button>
      </form>
    </div>
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
  return postsById
    .map(
      (
        post
      ) => `<section class="postx profile-page-tweets" data-id="${post.id}">
      <p class="own-post">Posted on ${post.time_stamp}</p>
      <p>${post.post}</p>
      <button class="profile-delete-button" onClick="deleteOwnPost(event)"><i class="fa fa-trash-o"></i>Retract yourself?</button>
    </section>  `
    )
    .join('');
}

function deleteOwnPost(event) {
  const deleteBtn = event.target;
  const ownPostDOM = deleteBtn.closest('.postx');
  // console.log(treasureDOM) this gives me the dom object that we are manipulating (the shole section, )
  const postId = ownPostDOM.dataset.id;
  //dataset.id is getting the tag data-id
  // console.log(treasureId);
  //this is giving me which id im clicking
  fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
  }).then(() => {
    // this is removing just that one treasure from my state.treasures
    state.posts = state.posts.filter((t) => t.id != postId);
    renderProfilePage();
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
