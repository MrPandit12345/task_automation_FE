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
    <div className="register-wrapper d-flex align-items-center justify-content-center">
      <div className="card register-card shadow">
        <div className="card-body">
          <h3 className="text-center mb-4 fw-bold">Create Account</h3>

          <form onSubmit={submit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Create a password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Register
            </button>
          </form>

          <p className="text-center mt-3 mb-0">
            Already have an account?{" "}
            <span
              className="login-link"
              onClick={() => setShowRegister(false)}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
