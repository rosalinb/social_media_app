function renderComments() {
    document.querySelector()
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