import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import listContext from "../context/lists/ListContext";
import Spinner from "./Spinner";

const ResetPassword = () => {
  const context = useContext(listContext);
  const { LoadingActive, LoadingFalse, isLoading } = context;

  let { id } = useParams();
  const [user, setUser] = useState({
    password: "",
    cpassword: "",
  });

  const history = useNavigate();

  const handleInputs = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { password, cpassword } = user;
    if (!password || !cpassword) {
      alert("fill all the data");
    } else if (password !== cpassword) {
      alert("password does not match");
    } else {
      LoadingActive();
      const res = await fetch(`http://localhost:5000/resetPassword/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          cpassword,
        }),
      });

      const data = await res.json();
      console.log(data);
      if (data.status === "success") {
        LoadingFalse();
        localStorage.setItem("token", data.authToken);
        history("/list");
      } else {
        LoadingFalse();
        alert(`fail ${data.message}`);
      }
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <section className="mt-5" id="text_shadow">
              <div className="container-fluid" id="registration_main_container">
                <div className="row">
                  <div className="col-md-6 col-10 order-sm-1 order-md-0">
                    <h1 className="mt-5" id="signup-heading">
                      RESET <span id="logohalfcolorchange">PASSWORD</span>
                    </h1>
                    <form method="POST" className="mt-3">
                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-lock zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          required
                          onChange={handleInputs}
                          value={user.password}
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Your Password"
                        />
                      </div>
                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-lock zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          required
                          onChange={handleInputs}
                          value={user.cpassword}
                          type="password"
                          className="form-control"
                          id="cpassword"
                          name="cpassword"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          onClick={postData}
                          type="submit"
                          name="registration"
                          value="Register"
                          id="registration"
                          className="form-submit btn btn-primary p-2 btn-lg "
                        />
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

export default ResetPassword;
