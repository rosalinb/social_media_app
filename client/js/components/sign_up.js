function renderSignUp() {
  document.querySelector("#page").innerHTML = `
    <section class="sign-up-form">
      <form onSubmit="singUp(event)">
        <h2>The more we care, we share!</h2>
        <h3>Tweeter</h3>

          <input type="text" name="avatar" placeholder="Upload your avatar">   
          <input type="text" name="name" placeholder="Enter your name">
          <input type="text" name="email" placeholder="Email">
          <input type="hidden" name="user_type" value="user">
          <input type="password" name="password" placeholder="password">
 
        <button>Sign Up</button>
      </form>

      <p>Already have an account?<span><li class=""onClick="renderLogin()">login</li>
      </span></p>

    </section>
  `;
}

function singUp(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        state.loggedInUserName = res;
        renderPostList();
      }
    });
}
