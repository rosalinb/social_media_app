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
   <div class="all-tweets">
      <section class='post' data-id='${post.id}'>
        <header>
          <img class="avatar-mini" src="${post.avatar}" alt="User's avatar">
          <h2>${post.name}</h2>
        </header>
        
        <p class="p-tweets">${post.post}</p>
        <img src="${post.attachment}" alt="attachment">
        <p class="p-tweets">Posted on ${post.time_stamp}</p>
        
        <form onSubmit="likePost(event)">
          <input name='post_id' value='${post.id}' type='hidden'>
          <div>
          <button class="like-button"><i class="fa fa-thumbs-up"></i></button>
          <span>${numLikesForPost(post.id)}</span>
          </div>
        </form>    
        <span class="" onClick="renderComments(event)">Comment</span>
      </section> 
    </div>   
  `
      )
      .join('');
  } else {
    return state.posts
      .map(
        (post) => `
        <div class="all-tweets">
      <section class='post' data-id='${post.id}'>
        <header>
          <h2>${post.name}</h2>
          <span class="avatar-mini" onclick="renderProfileDetailsChange()">Update your Avatar!</span>
        </header>
        <p class="p-tweets">${post.post}</p>
        <img src="${post.attachment}" alt="attachment"/>
        <p class="p-tweets">Posted on ${post.time_stamp}</p>
        <form onSubmit="likePost(event)">
          <input name='post_id' value='${post.id}' type='hidden'>
          <div>
          <button  class="like-button"><i class="fa fa-thumbs-up" ></i></button>
          <span>${numLikesForPost(post.id)}</span>
          </div>

        </form>
        <span class="" onClick="renderComments(event)">Comment</span>
      </section>
      </div>
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
