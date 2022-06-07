function logOut() {
  fetch("/api/sessions", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  }).then((req, res) => {
    state.loggedInUserName = false;
    header();
  });
}
