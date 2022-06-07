function renderPostPage() {
  document.querySelector('#page').innerHTML = `
    <section>
      <form onSubmit="createPost(event)>
        <p>username and profile picture here</p>
        <textarea name='post' rows='4' cols='50' placeholder='Whats's happening?'></textarea>
        <span onClick="">Attachment</span>
        <button>Post</button>
      </form>
    </section>
  `
}

function createPost(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))
  fetch('/api/posts', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(post => {
      state.posts.push(post)
      renderPostsList()
    })
}