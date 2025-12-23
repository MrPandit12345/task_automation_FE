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
    <div className="flex justify-center m-8">
      <div
        className="w-fit h-fit bg-indigo-50 rounded shadow flex flex-col justify-between p-3"
        onSubmit={submit}
      >
        <form className="text-indigo-500" action method="post">
          <fieldset className="border-4 border-dotted border-indigo-500 p-5">
            <legend className="px-2 italic -mx-2">Hey New User!</legend>
            <label
              className="text-xs font-bold after:content-['*'] after:text-red-400"
              htmlFor="name"
            >
              Full Name{" "}
            </label>
            <input
              className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              placeholder="Enter Full Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
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
              onClick={() => setShowRegister(false)}
            >
              Already have account{" "}
              <span className="font-bold px-1">
                Login
              </span>
            </p>
            <button className="w-full rounded bg-indigo-500 text-indigo-50 p-2 text-center font-bold hover:bg-indigo-400">
              Sign Up
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
