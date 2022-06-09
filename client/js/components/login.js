function renderLogin() {
  document.querySelector('.entry-page-container').innerHTML = `
    <section class="login-form">
      <form onSubmit="login(event)">
        <div class="logo-container">
          <img  class="logo" src="https://www.freepnglogos.com/uploads/twitter-logo-png/black-and-white-twitter-logo-png-hq-download-25.png" alt="image">
          <h1>Tweeter</h1>
        </div>
        <h2>The more we care, we share!</h2>
          <div>
          <input type="text" name="email" placeholder="Email/username:">
          </div>

          <div>
          <input type="password" name="password" placeholder="Password:">

          </div>
          <p id='error'></p>
        <button class="sigup-form-button"><span>Login</span></button>

      </form>
      <p class="login-alert">Not a user yet?<button class="entrypage-login-button" onClick="renderSignUp()">Sign up</button>
      </p>
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
