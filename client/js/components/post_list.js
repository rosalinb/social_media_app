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
  return state.posts
    .map(
      (post) => `
   
    <section class='post' data-id='${post.id}'>
      <header>
        <h2>${state.loggedInUserName.userName}</h2>
        <p>${state.loggedInUserName.avatar}</p>
      </header>
      <p>${post.post}</p>
      <p>${post.attachment}</p>
      <form>
        <input name='id' value='${post.id}' type='hidden'>
        <button class="" onClick="likePost(event)" value="${post.id}">Like</button>
      </form>
      <span>Num Of Likes</span>
      <span class="" onClick="commentPost(event)">Comment</span>
    </section>
    
  `
    )
    .join("");
}
