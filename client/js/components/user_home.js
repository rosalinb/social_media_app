function renderUserHomePage() {
  if (state.loggedInUserName) {
    const page = document.querySelector("#page");
    page.innerHTML = `
    <div>
      <div>

        <div class="logo-container">
          <img  class="logo" src="https://www.freepnglogos.com/uploads/twitter-logo-png/black-and-white-twitter-logo-png-hq-download-25.png" alt="image">
          <h1 class="title-profile">Tweeter</h1>
        </div>
       
      </div>
      <div class="entry-page-wrapper user-page-wrapper">
      
        <div class = "user-page-details">
        ${navBar}
      
        <section class="entry-page-container user-post-info">

        <div class="loggedin-user-info">
        <img class="loggedin-user-avatar" src="${
          state.loggedInUserName.avatar
        }" alt="User's avatar">
        <h2>${state.loggedInUserName.userName}</h2>
        </div>
        <h1>Tweets</h1>
        <h1>${renderPostsList()}</h1>
        </section>
    </div>
  </div>`;
  }
}
