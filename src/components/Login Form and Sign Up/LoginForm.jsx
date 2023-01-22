import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { usernameContext } from "../../Navigation/Navigation";
import { passwordContext } from "../../Navigation/Navigation";

const LoginForm = () => {
  // Context
  const { username, setUsername } = useContext(usernameContext);
  const { password, setPassword } = useContext(passwordContext);

  const usernameref = useRef();
  const passwordref = useRef();

  // Login state, false means login page is active
  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    axios
      .post("http://localhost:5000/login", {
        username: username,
        password: password
      })
      .then((response) => {
        if(response.data == true){
          console.log('finee');
          setLoginState(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  //   useEffect(() => {
  //     if (loginState) {
  //       //   alert("work");
  //       //   <Navigate to="/home" replace={true} />;
  //     }
  //   }, [loginState]);

  return (
    <div>
      {/* {username && <div>{username}</div>}
      {password && <div>{password}</div>} */}
      <div>LoginForm</div>
      <NavLink className="bg-red-600 block text-white p-2 m-5" to="/signup">
        Go to Sign Up Page
      </NavLink>
      <NavLink className="bg-red-600 block text-white p-2 m-5" to="/home">
        Go to Home Page
      </NavLink>
      {loginState && <Navigate to="/home" replace={true} />}
      <button
        onClick={() => setLoginState(true)}
        className="bg-red-600 rounded-md block text-white p-2 m-5"
        to="/home"
      >
        Go to Home Page
      </button>
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
          <button
            onClick={() => {
              setUsername(usernameref.current.value);
              setPassword(passwordref.current.value);
            }}
            className="bg-red-600 hover:bg-red-700 text-white p-2 m-5"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
