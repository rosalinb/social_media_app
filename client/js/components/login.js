function renderLogin() {
  document.querySelector("#page").innerHTML = `
    <section class="login">
      <form onSubmit="login(event)">
        <h2>Tweeter</h2>

          <input type="text" name="email" placeholder="Email/username:">
          <input type="password" name="password" placeholder="Password:">

        <button>Login</button>
      </form>
      <p>Not signed up?<span><li class="" onClick="renderSignUp()">person_add</li>
      </span></p>
    </section>
  `;
}

function login(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  fetch("/api/sessions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((userName) => (state.loggedInUserName = userName))
    .then(() => {
      header();
    });
}
