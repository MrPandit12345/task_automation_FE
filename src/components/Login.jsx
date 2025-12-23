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
    <div className="flex justify-center m-8">
      <div
        className="w-fit h-fit bg-white rounded shadow flex flex-col justify-between p-3"
        onSubmit={submit}
      >
        <form className="text-indigo-500" action method="post">
          <fieldset className="border-4 border-dotted border-indigo-500 p-5">
            <legend className="px-2 italic -mx-2">Welcome again!</legend>
            <label
              className="text-xs font-bold after:content-['*'] after:text-red-400"
              htmlFor="email"
            >
              Mail{" "}
            </label>
            <input
              className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              className="text-xs font-bold after:content-['*'] after:text-red-400"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p
              className="block text-right text-xs text-indigo-500 mb-4 cursor-pointer"
              onClick={() => setShowRegister(true)}
            >
              Don’t have an account?{" "}
              <span className="font-semibold px-1">Create account</span>
            </p>
            <button className="w-full rounded bg-indigo-500 text-indigo-50 p-2 text-center font-bold hover:bg-indigo-400">
              Log In
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
