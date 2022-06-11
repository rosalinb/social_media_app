function renderPostPage() {
  let localDate = new Date().toLocaleDateString();
  let localTime = new Date().toLocaleTimeString();
  let allTime = `${localDate} at ${localTime}`;
  document.querySelector('.entry-page-container').innerHTML = `
    <section class="post-new-tweets">
      <form onSubmit="createPost(event)">
      <h2>${state.loggedInUserName.userName}</h2>
      <div>
        <label>What's happening?</label>
        <textarea name='post' rows='4' cols='50'></textarea>
      </div>
      <div>
        <input name="attachment"></input>
        <span class="material-icons attachment-icon">add_photo_alternate</span>
      </div>
      <div>
        <input name="timestamp" value="${allTime}" type="hidden"></input>
      </div>
      <div>
        <button class="post-tweets-button"><span class="material-icons post-tweets">check_circle</span></button>
      <div>
      </form>
    </section>
  `;
}

function createPost(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((post) => {
      state.posts.unshift(post);
      // renderUserHomePage();
      crazyfunction();
      postCreated();
    });
  postCreated();
  // renderUserHomePage();
}

//this is new function
function postCreated() {
  document.querySelector('.entry-page-container').innerHTML = `
    <section>
      <h1>Tweet created!</h1>
      </section>
    `;
}
