function renderUserHomePage() {
  if (state.loggedInUserName) {
    const page = document.querySelector("#page");
    page.innerHTML = `
    <div class="entry-page-wrapper">
    <div class = "user-page-details">

  
     <h1>${navBar}</h1>
     <section class="entry-page-container">

    <h1>${renderPostsList()}</h1>
    </section>
  </div>`;
  }
}
