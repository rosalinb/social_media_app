function renderAppHome() {
  const page = document.querySelector("#page");

  page.innerHTML = `
  <div class="entry-page-wrapper">

  <section class="hero-image-container">
      <img class="hero-image" src="" alt="hero image">
  </section>

    <section class="entry-page-container">

      <div class="logo-header">
        <img  class="logo" src=""alt="image">
        <h1>Tweeter</h1>
      </div>

      <h2>Take a sneak peek at what's happening around the world.</h2>
     

      <div class="sigup-login-tabs">
          <ul>
              <button class="button" onclick="renderSignUp()"><span>SignUp</span></button>

              <h4>Already have an account?</h4>

              <button class="button" onclick="renderLogin()"> <span>Login</span></button>
          </ul>
      </div>

      <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
  </section>
      `;
}
