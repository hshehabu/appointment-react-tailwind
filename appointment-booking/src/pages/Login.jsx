import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };
  return (
    <form className="min-h-[80vh] flex items-center" action={onSubmitHandler}>
      <div className="flex flex-col gap-3 items-start m-auto p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-xl font-semibold">
          {state == "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          {" "}
          {state == "Sign Up"
            ? "Please sign up to book appointment"
            : "Please log in to book appointment"}
        </p>
        {state === "Sign Up" && (
          <div className="w-full ">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1 text-black"
              type="text"
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
            />
          </div>
        )}
        <div className="w-full ">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1 text-black"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
        </div>
        <div className="w-full ">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1 text-black"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            required
          />
        </div>
        <button
          className="w-full bg-primary text-white py-2 rounded-md text-base"
          onSubmit={onSubmitHandler()}
          type="submit"
        >
          {state == "Sign Up" ? "Create account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Login")}
            >
              {" "}
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              {" "}
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
