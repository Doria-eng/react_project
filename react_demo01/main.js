function AppContent() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // derived state
  const usernameClass = username.length <= 5 ? "input-error" : "input";
  const passwordClass = password.length <= 5 ? "input-error" : "input";

  function handleSubmit(event) {
    event.preventDefault();

    if (usernameClass === "input-error" || passwordClass === "input-error") {
      return;
    }

    console.log("username: ", username);
    console.log("password: ", password);

    setUsername("");
    setPassword("");
  }

  // JSX syntax
  return (
    <main className="main">
      <h2 className="h2">Login Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          className={usernameClass}
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          className={passwordClass}
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <br />
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </main>
  );
}
const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<AppContent />);
