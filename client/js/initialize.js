const state = {
  posts: []
}

fetch('/api/posts')
  .then(res => res.json())
  .then(posts => {
    state.posts = posts
    renderPostList()
  })