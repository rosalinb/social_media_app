function renderLogin() {
  document.querySelector(".entry-page-container").innerHTML = `
    <section class="login-form">
      <form onSubmit="login(event)">
        <h2>Tweeter</h2>

          <input type="text" name="email" placeholder="Email/username:">
          <input type="password" name="password" placeholder="Password:">
          <p id='error'></p>
        <button>Login</button>
      </form>
      <p>Not signed up?<span><button class="" onClick="renderSignUp()">Sign up</button>
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
    .then(() => renderUserHomePage());

  // fetch("/api/posts")
  //   .then((res) => res.json())
  //   .then((posts) => {
  //     state.posts = posts;
  //     // renderPostsList();
  //     // header();
  //   });

  // fetch("/api/profiles")
  //   .then((res) => res.json())
  //   .then((profile) => {
  //     console.log(profile);
  //     state.profile = profile;
  //     // renderProfilePage();
  //   });
}
