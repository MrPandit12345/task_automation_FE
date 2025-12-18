import { useState } from "react";
import { loginUser } from "../api/auth.js";

export default function Login({ setToken, setShowRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const res = await loginUser({ email, password });
    localStorage.setItem("token", res.data.token);
    setToken(res.data.token);
  };

  return (
    <form className="card" onSubmit={submit}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button>Login</button>
      <p onClick={() => setShowRegister(true)}>Create account</p>
    </form>
  );
}
