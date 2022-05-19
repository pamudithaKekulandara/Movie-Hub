import React, { useState } from "react";
import { useNavigate } from "react-router";
// import './reg.css'

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    phoneNo: "",
    email: "",
    password: "",
    rpassword: "",
    cardNo: "",
    cvc: "",
    eDate: "",
    eYear: "",
  });

  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newCustomer = { ...form };
    if (form.password != form.rpassword) {

      alert('Plesase enter password correctly')

      window.location = "/reg";
    }
    else{
    await fetch('http://localhost:5000/customer/add', {
      method: 'POST',

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCustomer),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({
      name: "",
      phoneNo: "",
      email: "",
      password: "",
      rpassword: "",
      cardNo: "",
      cvc: "",
      eDate: "",
      eYear: "",
    });
    navigate("/");
  }
}

  return (
    <div className="container">
      <h1 className="center">......Welcome to the MOVIE HUB......</h1>
      <form onSubmit={onSubmit}>
        <div className="row">
          <h4>Account</h4>
          <div className="input-group input-group-icon">
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              value={form.name}
              onChange={(e) => updateForm({ name: e.target.value })}
            />
            <div className="input-icon">
              <i className="fa fa-user"></i>
            </div>
          </div>

          <div className="input-group input-group-icon">
            <input
              type="email"
              placeholder="Email Adress"
              id="email"
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })}
              Required
              pattern="[a-z 0-9 .+-_%]+@+[a-z 0-9 +-_%]+\.[a-z]{2,3}"
            />
            <div className="input-icon">
              <i className="fa fa-envelope"></i>
            </div>
          </div>

          <div className="input-group input-group-icon">
            <input
              type="number"
              placeholder="Phone number"
              Required
              pattern="[0-9].{11}"
              id="phoneNo"
              value={form.phoneNo}
              onChange={(e) => updateForm({ phoneNo: e.target.value })}
            />
            <div className="input-icon">
              <i className="fa fa-phone"></i>
            </div>
          </div>

          <div className="input-group input-group-icon">
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={form.password}
              onChange={(e) => updateForm({ password: e.target.value })}
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters"
              Required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            />
            <div className="input-icon">
              <i className="fa fa-key"></i>
            </div>
          </div>

          <div className="input-group input-group-icon">
            <input
              type="password"
              placeholder="Re-enter the Password"
              id="rpassword"
              value={form.rpassword}
              onChange={(e) => updateForm({ rpassword: e.target.value })}
            />
            <div className="input-icon">
              <i className="fa fa-key"></i>
            </div>
          </div>
        </div>

        <div className="row">
          <h4>Payment Details</h4>

          <div className="input-group input-group-icon">
            <input
              type="number"
              placeholder="Card Number"
              id="cardNo"
              value={form.cardNo}
              onChange={(e) => updateForm({ cardNo: e.target.value })}
            />
            <div className="input-icon">
              <i className="fa fa-credit-card"></i>
            </div>
          </div>

          <div className="col-half">
            <div className="input-group input-group-icon">
              <input
                type="number"
                placeholder="Card CVC"
                id="cvc"
                value={form.cvc}
                onChange={(e) => updateForm({ cvc: e.target.value })}
              />
              <div className="input-icon">
                <i className="fa fa-user"></i>
              </div>
            </div>
          </div>
          <div className="col-half">
            <h4>Card Expire date</h4>
            <div className="input-group">
              <div className="col-third">
                <input
                  type="number"
                  placeholder="exp date"
                  id="eDate"
                  value={form.eDate}
                  onChange={(e) => updateForm({ eDate: e.target.value })}
                />
              </div>

              <div className="col-third">
                <input
                  type="number"
                  placeholder="exp year"
                  id="eYear"
                  value={form.eYear}
                  onChange={(e) => updateForm({ eYear: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <h4>Terms and Conditions</h4>
            <div className="input-group">
              <input id="terms" type="checkbox" include />
              <label for="terms">
                I accept the terms and conditions for signing up to this
                service, and hereby confirm I have read the privacy policy.
              </label>
            </div>
          </div>
        </div>
        <div className="center">
          <button className="btn btn-outline-dark me-2 button1">
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
}
