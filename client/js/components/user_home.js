function renderUserHomePage() {
  if (state.loggedInUserName) {
    const page = document.querySelector("#page");

    page.innerHTML = `
    <div class="entry-page-wrapper">
  
     <h1>${navBar}</h1>
     <section class="entry-page-container">

  <h1>${renderHomePage()}</h1>
  </section>`;
  }
}
