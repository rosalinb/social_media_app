function header() {
  if (state.loggedInUserName) {
    document.querySelector(".side-nav").innerHTML = `
    <ul>
        <li class="" onClick="renderHomePage()">Home</li>
        <li class="" onClick="renderProfilePage()">Your Profile</li>
        <li class="" onClick="renderSearchPage()">Search</li>
        <li class="" onClick="renderPostPage()">Post!</li>
          <li onclick="logOut()">Log out</li>      
    </ul>
    `;
  } else {
    document.querySelector(".side-nav").innerHTML = `
    <ul>
        <li class="" onClick="renderSignUp()">Sign Up</li>
        <li class="" onClick="renderLogin()">Log in</li>
    </ul>
    `;
  }
}
