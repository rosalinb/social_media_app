// render functions for profile page


function renderProfile() 


/// THIS FUNCTION NEEDS TO BE UPDATED
function renderPostList() {
  document.querySelector('#page').innerHTML = `
    <h2>Welcome to the Social Media App</h2>
    <section>
      ${renderPosts()}
    </section>
  `;
}
