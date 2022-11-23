import { useState } from "react";

export const Login = ({ setUserLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserLogin({ loginUsername: username, loginPassword: password });
    setUsername("");
    setPassword("");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
      <label htmlFor="loginUsername">Username</label>
      <input
        type="text"
        id="loginUsername"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="loginPassword">Password</label>
      <input
        type="password"
        id="loginPassword"
        autoComplete="on"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};
