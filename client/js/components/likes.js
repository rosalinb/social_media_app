function likePost(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form));
  // const likeBtnDOM = likeBtn.closest('.post')
  // const postId = likeBtnDOM.dataset.id
  console.log(data)
  // const userId = state.loggedInUserId.userId
  fetch('/api/likes', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then((res) => res.json())
}