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
  console.log("hey");
  return state.posts
    .map(
      (post) => `
    <section class='post' data-id='${post.id}'>
      <header>
        <h2>${post.id}</h2>
      </header>
      <p>${post.post}</p>
      <p>${post.attachment}</p>
      <span class="" onClick="likePost(event)">Like</span>
      <span class="" onClick="commentPost(event)">Comment</span>
    </section>
  `
    )
    .join("");
}
