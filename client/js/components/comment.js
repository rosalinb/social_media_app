function renderComments() {
    const page = document.querySelector("#page");
    
    page.innerHTML = `
        ${navBar}
        <section class='post' data-id='${state.posts[0].id}'>
        <header>
            <h2>${state.loggedInUserName.userName}</h2>
            <img class="avatar-mini" src="${state.loggedInUserName.avatar}" alt="User's avatar">
        </header>
        <p>${state.posts[0].post}</p>
        <p>${state.posts[0].attachment}</p>
        <form onSubmit="likePost(event)">
            <input name='post_id' value='${state.posts[0].id}' type='hidden'>
            <button>Like</button>
        </form>
        <span>Num Of Likes</span>
        </section>
        <section class="comment-form">
        <form onSubmit="commentPost(event)">
            <input name='comments' type='text'>
            <button>Add Comment!</button>
        </form>
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
    .then((comment) => {
        console.log(res)
    })
}