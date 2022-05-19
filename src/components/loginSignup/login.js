import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./reg.css";

export default function LoginFun() {
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser != null) {
      window.location = "/users";
    }
  }, []);

  //  const [details, setDetails]=useState({email:"",password:""});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/customer/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data == "granted") {
          localStorage.setItem("user", email);
          window.location = "/users";
        } else {
          console.log(res.data);
        }
      });
  };

  return (
    <div>
      <div class="form">
        <div class="form-toggle"></div>
        <div class="form-panel one">
          <div class="form-header">
            <h1>Account Login</h1>
          </div>
          <div class="form-content">
            <form onSubmit={submitHandler}>
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  className="center"
                  type="text"
                  id="username"
                  name="username"
                  required="required"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required="required"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div class="form-group">
                <label class="form-remember">
                  <input type="checkbox" />
                  Remember Me
                </label>
                <a class="form-recovery" href="#">
                  Forgot Password?
                </a>
              </div>
              <div class="form-group">
                <button type="submit">Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
