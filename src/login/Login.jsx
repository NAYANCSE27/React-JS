import { useState } from "react";

import { authenticate } from "./LoginServices";

import FormInput from "./FormInput";

import "./Login.css";


function Login() {
  const [credential, setCrdential] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const update = {
      [event.target.name]: event.target.value,
    };
    setCrdential({ ...credential, ...update });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    try {
      authenticate(credential);
      // redirect
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleLogin}>
        <FormInput 
            label="User ID"
            name="email"
            type="email"
            handleOnChange={handleOnChange}
        />

        <FormInput 
            label="Password"
            name="password"
            type="password"
            handleOnChange={handleOnChange}
        />

        <div className="formInput">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}

export default Login;