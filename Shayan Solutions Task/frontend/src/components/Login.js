import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import listContext from "../context/lists/ListContext";
import Spinner from "./Spinner";

const Login = () => {
  const context = useContext(listContext);
  const { LoadingActive, LoadingFalse, isLoading } = context;

  const [email, setEmail] = useState("");
  const [emailForget, setEmailForget] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const submitData = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("fill all the fields");
    } else {
      LoadingActive();
      const res = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log(data);
      if (data.status === "success") {
        // save the auth token and redirect
        localStorage.setItem("token", data.authToken);
        LoadingFalse();
        history("/list");
      } else {
        LoadingFalse();
        alert("invalid credentials");
      }
    }
  };

  const forgetPasswordHandler = async (e) => {
    e.preventDefault();
    if (!emailForget) {
      alert("Enter an email");
      return;
    }
    LoadingActive();
    const res = await fetch("http://localhost:5000/forgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailForget }),
    });
    const data = await res.json();
    if (data.status === "success") {
      LoadingFalse();
      setEmailForget("");
      alert("Email sent you plz check");
    } else {
      LoadingFalse();
      alert(`fail ${data.message}`);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history("/list");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <section className="mt-5" id="text_shadow">
              <div className="container-fluid" id="registration_main_container">
                <div className="row">
                  <div className="col-md-6 col-10 order-sm-1 order-md-0 d-flex flex-column align-items-center justify-content-center ">
                    <NavLink
                      exact="true"
                      className="navbar-brand text-dark btn btn-outline-success btn-lg"
                      to="/signup"
                    >
                      Create An Account
                    </NavLink>
                  </div>
                  <div className="col-md-6 col-10 order-sm-0 order-md-1">
                    <h1 className="mt-5" id="signup-heading">
                      Sign <span id="logohalfcolorchange">In</span>
                    </h1>
                    <form className="mt-3" onSubmit={submitData}>
                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-email zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          // required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </div>

                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-lock zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          // required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Your Password"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="submit"
                          name="login"
                          value="SignIn"
                          id="login"
                          className="form-submit btn btn-primary p-2 btn-lg "
                        />
                      </div>
                    </form>

                    <form className="mt-3" onSubmit={forgetPasswordHandler}>
                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-email zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          // required

                          onChange={(e) => setEmailForget(e.target.value)}
                          type="emailforget"
                          className="form-control"
                          id="emailforget"
                          name="emailforget"
                          placeholder="Your Email"
                          value={emailForget}
                        />
                      </div>
                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-lock zmdi-hc-3x mr-3"></i>
                        </div>
                        <button className="text-dark btn btn-outline-secondary btn-lg navbar-brand">
                          ForgetPassword
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
