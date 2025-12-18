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
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="card login-card shadow">
        <div className="card-body">
          <h3 className="text-center mb-4 fw-bold">Login</h3>

          <form onSubmit={submit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>

          <p className="text-center mt-3 mb-0">
            Don’t have an account?{" "}
            <span
              className="register-link"
              onClick={() => setShowRegister(true)}
            >
              Create account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
