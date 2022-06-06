function renderPostList() {
  document.querySelector('#page').innerHTML = `
    <h2>Welcome to the Social Media App</h2>
    <section>
      ${renderPosts()}
    </section>
  `
}

function renderPosts() {
  return state.posts.map(post => `
    <section class='post' data-id='${post.id}'>
      <header>
        <h2>${post.id}</h2>
        <span class="" onClick="deletePost(event)">delete</span>
      </header>
      <p>${post.post}</p>
      <p>${post.attachment}</p>
    </section>
  `).join('')
}

function deletePost(event) {
  const deleteBtn = event.target
  const postDOM = deleteBtn.closest('.post')
  const postId = postDOM.dataset.id
  fetch(`/api/posts/${postId}`, {
    method: 'DELETE'
  })
    .then(() => {
      state.posts = state.posts.filter(t => t.id != postId)
      renderPostList()
    })
}