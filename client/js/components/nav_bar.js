// function header() {
//   const page = document.querySelector("#page");
//   if (state.loggerInUserName) {
//     page.innerHTML = `
//     <nav class="nav-bar">
//       <ul>
//         <li class="" onClick="renderHomePage()">Home</li>
//         <li class="" onClick="renderProfilePage()">Your Profile</li>
//         <li class="" onClick="renderSearchPage()">Search</li>
//         <li class="" onClick="renderPostPage()">Post!</li>
//         <li onclick="logOut()">Log out</li>
//     </ul>
//     </nav>

//     `;
//   }
// }

const navBar = `
    <nav class="nav-bar">
      <ul>
        <li class="" onClick="renderUserHomePage()">Home</li>
        <li class="" onClick="renderProfilePage()">Your Profile</li>
        <li class="" onClick="renderSearchPage()">Search</li>
        <li class="" onClick="renderPostPage()">Post!</li>
        <li onclick="logOut()">Log out</li>
    </ul>
    </nav>`;
