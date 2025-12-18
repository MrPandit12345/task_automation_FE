import { useState } from "react";
import { registerUser } from "../api/auth.js";

export default function Register({ setShowRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await registerUser({ name, email, password });
    alert("Registered! Login now.");
    setShowRegister(false);
  };

  return (
    <form className="card" onSubmit={submit}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button>Register</button>
    </form>
  );
}
