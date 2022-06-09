//This function should not be deleted.

// function renderPostsList() {
//   document.querySelector("#page").innerHTML = `

//       <h2>Welcome to the Social Media App</h2>
//       <section>
//         ${renderHomePage()}
//       </section>

//   `;
// }

function renderPostsList() {
  if (state.loggedInUserName.avatar !== '') {
    return state.posts
      .map(
        (post) => `
   
    <section class='post' data-id='${post.id}'>
      <header>
        <h2>${post.name}</h2>
        <img class="avatar-mini" src="${post.avatar}" alt="User's avatar">
      </header>
      <p>${post.post}</p>
      <img src="${post.attachment}">
      <form onSubmit="likePost(event)">
        <input name='post_id' value='${post.id}' type='hidden'>
        <button>Like</button>
      </form>

      <span>${numLikesForPost(post.id)} likes</span>
      <span class="" onClick="renderComments(event)">Comment</span>
    </section>    
  `
      )
      .join('');
  } else {
    return state.posts
      .map(
        (post) => `
      <section class='post' data-id='${post.id}'>
        <header>
          <h2>${post.name}</h2>
          <span class="avatar-mini" onclick="renderProfileDetailsChange()">Update your Avatar!</span>
        </header>
        <p>${post.post}</p>
        <img src="${post.attachment}" alt="attachment"/>
        <form onSubmit="likePost(event)">
          <input name='post_id' value='${post.id}' type='hidden'>
          <button>Like</button>
        </form>
        
        <span>${numLikesForPost(post.id)} likes</span>
        <span class="" onClick="renderComments(event)">Comment</span>
      </section>
      `
      )
      .join('');
  }
}

function numLikesForPost(postId) {
  return state.likesArray.filter((like) => Number(like) === postId).length;
}

function crazyfunction() {
  fetch('/api/posts')
    .then((res) => res.json())
    .then((posts) => {
      state.posts = posts;
    });
  renderUserHomePage();
}
