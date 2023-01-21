import React from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  const usernameref = useRef();
  const passwordref = useRef();
  return (
    <div>
      <div>LoginForm</div>
      <NavLink className="bg-red-600 block text-white p-2 m-5" to="/signup">
        Go to Sign Up Page
      </NavLink>
      <NavLink className="bg-red-600 block text-white p-2 m-5" to="/home">
        Go to Home Page
      </NavLink>
      <div>
        <form action="" className="flex flex-col">
          <input
            ref={usernameref}
            type="text"
            className="border-2 p-3"
            placeholder="Enter Username"
          />
          <input
            ref={passwordref}
            type="text"
            className="border-2 p-3"
            placeholder="Enter Password"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white p-2 m-5">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
