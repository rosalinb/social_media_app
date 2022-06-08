function createComment(event) {
    event.preventDefault();
    const form = event.target;
    const data= Object.fromEntries(new FormData(form));
    fetch('/api/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify(data),
    })
    .then((res) => res.json())
    // unfinished.
}