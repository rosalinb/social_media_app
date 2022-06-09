function renderAppHome() {
  const page = document.querySelector("#page");

  page.innerHTML = `
  <div class="entry-page-wrapper">

  <section class="hero-image-container">
      <img class="hero-image" src="https://cdn.dribbble.com/users/2918596/screenshots/6927345/social_media.gif" alt="hero image">
  </section>

    <section class="entry-page-container">

      <div class="logo-container">
        <img  class="logo" src="https://www.freepnglogos.com/uploads/twitter-logo-png/black-and-white-twitter-logo-png-hq-download-25.png" alt="image">
        <h1>Tweeter</h1>
      </div>
      <div class="entry-page-info">
        <h2>Take a sneak peek at what's happening around the world.</h2>
       
        <p class="icon-heading"><span class="material-icons follow-interest" >follow_the_signs</span>Follow your interests.</p>
        <p class="icon-heading"><span class="material-icons join-heard" >handshake</span>Join the heard</p>
        <p class="icon-heading"><span class="material-icons hear-people" >connect_without_contact</span>Hear what people are talking about</p>

        <div class="signup-login-tabs">
            <ul>
                <button class="entrypage-button" onclick="renderSignUp()"><span>SignUp</span></button>

                <p class="login-alert">Already have an account?</p>

                <button class="entrypage-button" onclick="renderLogin()"> <span>Login</span></button>
            </ul>
        </div>

        <p class="last-info-into-page">*By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
      </div>
  </section>
      `;
}
