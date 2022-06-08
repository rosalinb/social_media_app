// render functions for profile page

// renders own posts

function renderProfileDetailsChange() {
  document.querySelector('#own-posts').innerHTML = `
    <h2>change details</h2>
    <section class="changeUserDetails">
      <form onSubmit="changeProfileDetails(event)">
        <input type="text" name="name" value="${state.loggedInUserName.userName}" readonly>
        <input type="text" name="email" value="Email" readonly>
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
    .then((profile) => {
      state.profile = profile;
    })
    .then(() => renderProfilePage());
}

function renderProfilePage() {
  document.querySelector('#page').innerHTML = `
    <h2>Welcome ${state.loggedInUserName.userName}! This is your profile page</h2>
    <h3>here goes your information, if you want to change your details, <span onclick="renderProfileDetailsChange()">click here</span></h3>
    <section id="own-posts"></section>
    <li onclick="renderUserHomePage()">go back to user's home page</li>

    `; // <p>Test area: avatar: ${profile.avatar} id: ${profile.id}, about_you: ${profile.about_you} </p>
  // `';
  renderOwnPosts();
}
function renderOwnPosts() {
  document.querySelector('#own-posts').innerHTML = `
    <h2>These are ALL THE POSTS, WE NEED TO FILTER THEM BY USER posts</h2>
    <section>
    ${renderHomePage()}
   
    </section>
  `;
}
// ${renderPosts()} goes in renderOwnPosts when fixed
