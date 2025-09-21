function AppContent() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (username === "" || password === "") {
      alert('"username" and "password" are required');
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
          className="input"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          className="input"
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
