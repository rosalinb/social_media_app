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
        <li  onClick="renderUserHomePage()"><span class="material-icons nav-icon">other_houses</span>Home</li>
      
        <li onClick="renderProfilePage()"><span class="material-icons nav-icon">person</span>Profile</li>

        <li  onClick="renderPostPage()"><span class="material-icons nav-icon">sms</span>Tweet</li>

        <li onclick="logOut()"><span class="material-icons nav-icon" >logout</span>Log out</li>
    </ul>
    </nav>`;
