function renderLogin() {
  document.querySelector('#page').innerHTML = `
    <section class="login">
      <form onSubmit="login(event)">
        <h2>Login:</h2>
        <fieldset>
          <input type="text" name="email" placeholder="Email/username:">
        </fieldset>
        <fieldset>
          <input type="password" name="password" placeholder="Password:">
        </fieldset>
        <button>Login</button>
      </form>
    </section>
  `
}

function login(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))
  fetch('/api/sessions',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(userName => state.loggedInUserName = userName)
    .then(() => renderPostList())
}

