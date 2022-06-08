function header() {
  const page = document.querySelector("#page");
  if (state.loggedInUserName) {
    page.innerHTML = `
    <ul>
        <li class="" onClick="renderHomePage()">Home</li>
        <li class="" onClick="renderProfilePage()">Your Profile</li>
        <li class="" onClick="renderSearchPage()">Search</li>
        <li class="" onClick="renderPostPage()">Post!</li>
        <li onclick="logOut()">Log out</li>
    </ul>
    `;
  }
}
