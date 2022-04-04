import { useState } from "react";
import { useDispatch } from "react-redux";
import Joi from "joi-browser";
import axios from "axios";

import { authActions } from "../store/auth";
import LogInValidation from "../validation/LogIn.validation";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validateLogin = Joi.validate({ email, password }, loginSchema, {
      abortEarly: false,
    });
    const { error } = validateLogin;
    // const error = validateLogin.error
    if (error) {
      console.log(error);
    } else {
      try {
        const responseFromServer = await axios.post("/users/login", {
          email,
          password,
        });
        console.log("responseFromServer", responseFromServer);
        localStorage.setItem("token", responseFromServer.data.token);
        dispatch(authActions.login());
      } catch (err) {
        console.log("err", err);
      }
    }
  };
