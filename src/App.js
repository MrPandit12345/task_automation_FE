import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showRegister, setShowRegister] = useState(false);

  if (!token) {
    return showRegister ? (
      <Register setShowRegister={setShowRegister} />
    ) : (
      <Login setToken={setToken} setShowRegister={setShowRegister} />
    );
  }

  return <Dashboard setToken={setToken} />;
}
