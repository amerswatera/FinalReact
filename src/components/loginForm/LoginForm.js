import React from "react";
import { useState, useEffect } from "react";
import Joi from "joi-browser";
import "./LoginForm.css";

import axios from "axios";

import LogInValidation from "../validation/LogInValidation";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log("loggedIn", loggedIn);
  }, [loggedIn]);

  const handleEmailChange = (event) => {
    // console.log("event", event);
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleOnSubmit = (event) => {
    //prevent the form to do refresh
    event.preventDefault();
    const validatedValue = Joi.validate({ email, password }, LogInValidation, {
      abortEarly: false,
    });
    console.log("validatedValue", validatedValue);
    const { error } = validatedValue;
    if (error) {
      //invalid email or password
    } else {
      //email and password is good
    }
    if (email !== "" && password !== "") {
      // setLoggedIn(true);
      axios
        .post("/users/login", {
          email,
          password,
        })
        .then((res) => {
          console.log("res from server", res);
          console.log("token", res.data.token);
          localStorage.setItem("tokenKey", res.data.token);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log("error from server", err);
          if (err.response) {
            console.log("err.response", err.response);
            alert(err.response.data);
          }
          // if (err.request) {
          //   console.log("err.request", err.request);
          // }
          // if (err.message) {
          //   console.log("err.message", err.message);
          // }
          // console.log("err.config", err.config);
          // localStorage.removeItem("tokenKey");
          localStorage.clear();
          setLoggedIn(false);
          // alert(err);
        });
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <label className="inputs" htmlFor="email">
        Email:
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      ></input>
      <br />
      <label className="inputs" htmlFor="password">
        Password:
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      ></input>
      <br />
      <button className="btn-1">login</button>
      {/* like ngIf */}
      {loggedIn && (
        <div>
          your email is: {email}
          <br />
          your password is: {password}
        </div>
      )}
    </form>
  );
};

export default LogInForm;
