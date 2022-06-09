function likePost(event) {
  console.log('pls work')
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form));
  fetch('/api/likes', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then((res) => res.json())
  .then((likes) => {
    state.likesArray.push(likes.post_id)
    console.log(state.likesArray)

    renderUserHomePage()
  })
}