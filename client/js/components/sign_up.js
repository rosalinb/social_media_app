function renderSignUp() {
  pageSection = document.querySelector(".entry-page-container");
  pageSection.innerHTML = `
    <section class="sign-up-form">
      <form onSubmit="signUp(event)">
        
        <div class="logo-container">
          <img  class="logo" src="https://www.freepnglogos.com/uploads/twitter-logo-png/black-and-white-twitter-logo-png-hq-download-25.png" alt="image">
          <h1>Tweeter</h1>
        </div>
        
        <h2>The more we care, we share!</h2>
        
          <div>
            <input type="text" name="avatar" placeholder="Upload your avatar">  
          </div>
          <div>
            <input type="text" name="name" placeholder="Enter your name">
          </div> 
          <div>
            <input type="text" name="email" placeholder="Email">
          </div>
          <div>
            <input type="hidden" name="user_type" value="user">
          </div>
          <div>
            <input type="password" name="password" placeholder="password">
          </div>
 
        <button class="sigup-form-button"><span>Sign Up</span></button>
      </form>

      <p class="login-alert">Already have an account?
      <button class="entrypage-login-button" onClick="renderLogin()">Login</button>
      </p>

    </section>
  `;
}

function signUp(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        state.loggedInUserName = res;
        renderAppHome();
      }
    });
}
