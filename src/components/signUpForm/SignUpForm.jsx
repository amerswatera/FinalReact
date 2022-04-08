import React, { Fragment } from "react";
import "./SignUpForm.css";
import { useState } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

const SignUpForm = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [biz, setBiz] = useState("");

  const handleNameCHange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    // console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleBizChange = (event) => {
    setBiz(event.target.checked);
  };

  const handleSignup = (ev) => {
    ev.preventDefault();
    //add joi validation
    axios
      .post("/users/register", { name, email, password, biz })
      .then((res) => {
        console.log("res.data", res.data);
        history.push("/log-in", { email, password });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Fragment className="container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <form className="form-container" onSubmit={handleSignup}>
        <h1 className="title">Sign up And Take a Part From The Future</h1>
        <label className="form-inputs">
          Name:
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            value={name}
            onChange={handleNameCHange}
          />
        </label>
        <br />
        <label className="form-inputs">
          Email:
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <label className="form-inputs">
          Password:
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <label className="form-inputs">
          Password:
          <input
            type="password"
            className="form-check-input"
            id="exampleCheck1"
            onChange={handleBizChange}
            checked={biz}
          />
        </label>
        <br />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Biz?
          <input type="checkbox" className="check-mark" />
        </label>
        <br />

        <button type="submit" className="primary">
          Sign up
        </button>
      </form>
    </Fragment>
  );
};

export default SignUpForm;
