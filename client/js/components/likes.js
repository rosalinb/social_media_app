function likePost(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form));
  // const likeBtnDOM = likeBtn.closest('.post')
  // const postId = likeBtnDOM.dataset.id
  // const userId = state.loggedInUserId.userId
  fetch('/api/likes', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then((res) => res.json())
  .then((likes) => {
    
    state.likesArray.push(likes.post_id)
    // const individualLikes = state.likesArray.filter((like, index) => like.post_id == state.posts[index].id)
    console.log(state.likesArray)
    // console.log(individualLikes)
    // console.log(state.posts.id)

    


    const count = {}
    state.likesArray.forEach(element => {
      count[element] = (count[element] || 0) + 1;
    })
    console.log(count)
  })
}