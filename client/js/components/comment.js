fetch('/api/comments')
.then((res) => res.json())
.then((comments) => {
    state.posts.comment = []
    comments.map(comment => 
    state.posts.comment.push(comment))
});




function renderComments(event) {
    const page = document.querySelector("#page");
    const commentBtn = event.target;
    const postDOM = commentBtn.closest('.post')
    const postId = postDOM.dataset.id

    let targetPost = state.posts.filter(post => Number(post.id) == postId)[0]





    page.innerHTML = `
        ${navBar}
        <section class='post' data-id='${targetPost.id}'>
        <header>
            <h2>${state.loggedInUserName.userName}</h2>
            <img class="avatar-mini" src="${state.loggedInUserName.avatar}" alt="User's avatar">
        </header>
        <p>${targetPost.post}</p>
        <p>${targetPost.attachment}</p>
        <form onSubmit="likePost(event)">
            <input name='post_id' value='${targetPost.id}' type='hidden'>
            <button>Like</button>
        </form>
        <span>Num Of Likes</span>
        </section>
        <section class="comment-form">
        <form onSubmit="commentPost(event)">
            <input name='post_id' value='${targetPost.id}' type='hidden'>
            <input name='comments' type='text'>
            <button>Add Comment!</button>
        </form>
        </section>
        <section class="comment-section">
        </section>
        `

}

function commentPost(event) {
    event.preventDefault();
    const form = event.target;
    const data= Object.fromEntries(new FormData(form));
    fetch('/api/comments', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify(data),
    })
    .then((res) => res.json())
    // .then((comment) => {}
}