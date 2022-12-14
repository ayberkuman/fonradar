import { Button } from "@components/common/button/Button";
import { useState } from "react";

export const Login = ({ setUserLogin, isValidated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserLogin({ loginUsername: username, loginPassword: password });
    setUsername("");
    setPassword("");
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-center rounded-lg gap-4 p-4 px-6"
    >
      <h1 className="text-title-24-auto-medium text-neutral-900 py-4">LOGIN</h1>
      <input
        placeholder="Username"
        className="p-2 px-6 bg-transparent invalid:border-accent-red border-neutral-500 border-b-2 text-title-16-auto-medium text-green focus:outline-none focus:border-neutral-800"
        autoFocus={true}
        required
        type="text"
        id="loginUsername"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="Password"
        className="p-2 px-6 bg-transparent invalid:border-accent-red border-neutral-500 border-b-2 text-title-16-auto-medium text-green focus:outline-none focus:border-neutral-800"
        required
        type="password"
        id="loginPassword"
        autoComplete="on"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button isPositive>Login</Button>
    </form>
  );
};
