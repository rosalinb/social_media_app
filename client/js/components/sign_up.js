function renderSignUp() {
  document.querySelector('#page').innerHTML = `
    <section class="sign-up">
      <form onSubmit="singUp(event)">
        <h2>Sign Up:</h2>
        <fieldset>
          <input type="text" name="name" placeholder="Name:">
        </fieldset>
        <fieldset>
          <input type="text" name="username" placeholder="Username:">
        </fieldset>
        <fieldset>
          <input type="text" name="email" placeholder="Email:">
        </fieldset>
        <fieldset>
          <input type="text" name="avatar" placeholder="Avatar:">
        </fieldset>
          <input type="hidden" name="role" value="user">
        <fieldset>
          <input type="password" name="password" placeholder="password">
        </fieldset>
        <button>Sign Up</button>
      </form>
    </section>
  `
}

function singUp(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))
  fetch('/api/users',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => {
      if(res.error) {
        console.log(res.error)
      } else {
        state.loggedInUserName = res
        renderPostList()
      }
    })
}