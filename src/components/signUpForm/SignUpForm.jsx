import React from "react";
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
    <form className="form-container" onSubmit={handleSignup}>
      <label className="form-inputs">
        Enter your name:
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          value={name}
          onChange={handleNameCHange}
        />
      </label>
      <label className="form-inputs">
        Enter your Email:
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label className="form-inputs">
        Enter your Password:
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <label className="form-inputs">
        Conform your Password:
        <input
          type="password"
          className="form-check-input"
          id="exampleCheck1"
          onChange={handleBizChange}
          checked={biz}
        />
      </label>
      <label className="form-check-label" htmlFor="exampleCheck1">
        Biz?
        <input type="checkbox" />
      </label>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;
