function AppContent() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (username === "" || password === "") {
      alert('"username" and "password" are required');
      return;
    }

    alert("username", username);
    alert("password", password);
  }

  // JSX syntax
  return (
    <main>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <br />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<AppContent />);
