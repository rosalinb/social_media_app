function renderLogin() {
  document.querySelector('.entry-page-container').innerHTML = `
    <section class="login-form">
      <form onSubmit="login(event)">
        <h2>Tweeter</h2>
          
          <input type="text" name="email" placeholder="Email/username:">
          <input type="password" name="password" placeholder="Password:">
          <span id="error"></span>
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

  fetch('/api/sessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((userName) => (state.loggedInUserName = userName))
    .then(() => renderUserHomePage());
}
//     .then(() => {
//       if (state.loggedInUserName == null) {
//         renderLogin();
//         const error = user.error;
//         console.log(error);
//         document.querySelector('#error').innerHTML = `<p>${error}</p>`;
//       } else {
//         renderUserHomePage();
//       }
//     });
// }

//// this funciton works
// function login(event) {
//   event.preventDefault();

//   const form = event.target;
//   const data = Object.fromEntries(new FormData(form));

//   fetch('/api/sessions', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then((userName) => (state.loggedInUserName = userName))
//     .then(() => renderUserHomePage());
// }
