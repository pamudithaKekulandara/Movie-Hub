import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./reg.css";

export default function Login(props) {
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (localStorage.getItem("admin")) {
      window.location = "/admin";
    }
    if (loggedInUser != null) {
      window.location = "/users";
    }
  }, []);

  //  const [details, setDetails]=useState({email:"",password:""});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (props.logout) {
    localStorage.removeItem("admin");
    localStorage.removeItem("user");
    window.location = "/";
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (props.admin) {
      axios
        .post("http://localhost:5000/admin/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data == "granted") {
            // localStorage.setItem("user", email);
            localStorage.setItem("admin", true);
            window.location = "/admin";
          } else {
            console.log(res.data);
          }
        });
    } else {
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
    }
  };

  return (
    <div>
      <div className="form">
        <div className="form-toggle"></div>
        <div className="form-panel one">
          <div className="form-header">
            <h1>Account Login</h1>
          </div>
          <div className="form-content">
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label for="username">Username</label>
                <input
                  classNameName="center"
                  type="text"
                  id="username"
                  name="username"
                  required="required"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-group">
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
              <div className="form-group">
                <label className="form-remember">
                  <input type="checkbox" />
                  Remember Me
                </label>
                <a className="form-recovery" href="#">
                  Forgot Password?
                </a>
              </div>
              <div className="form-group">
                <button type="submit">Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
