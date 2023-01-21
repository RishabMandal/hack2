import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

const SignUpPage = () => {
  const usernameref = useRef();
  const passwordref = useRef();
  return (
    <div>
      <div>SignUpPage</div>
      <NavLink className="bg-red-600 block text-white p-2 m-5" to="/login">
        Go to Login Page
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
          <button className="bg-red-600 hover:bg-red-700 text-white p-2 m-5">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
