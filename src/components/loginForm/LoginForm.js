import React from "react";
import "./LoginForm.css";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleEmailChange = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    // console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleBtnClick = (event) => {
    event.preventDefault();
    if (email && password) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div>
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <form>
        <p>
          <h1 className="title">
            LogIn And Help Us To Make The World Better Place
          </h1>

          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={handlePasswordChange}
          />
        </p>

        <button className="btn"> Submit</button>
      </form>
      {show && (
        <div>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>
      )}
      {show ? (
        <div>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>
      ) : (
        <div>Please fill email and password</div>
      )}
    </div>
  );
};
export default LoginForm;
