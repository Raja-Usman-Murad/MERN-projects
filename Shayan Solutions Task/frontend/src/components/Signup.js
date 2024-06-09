import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import listContext from "../context/lists/ListContext";
import Spinner from "./Spinner";

const Signup = () => {
  const context = useContext(listContext);
  const { LoadingActive, LoadingFalse, isLoading } = context;

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
    photo: "",
  });

  const history = useNavigate();

  const handleInputs = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handlePhoto = (e) => {
    let { files } = e.target;
    function encodeImageFileAsURL(file) {
      var reader = new FileReader();
      reader.onloadend = function () {
        setUser({ ...user, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
    encodeImageFileAsURL(files[0]);
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword, photo } = user;

    if (
      !name ||
      !email ||
      !phone ||
      !work ||
      !password ||
      !cpassword ||
      !photo
    ) {
      alert("fill all the data");
    } else if (password !== cpassword) {
      alert("password does not match");
    } else {
      LoadingActive();
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          work,
          password,
          cpassword,
          photo,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (data.status === "success") {
        LoadingFalse();
        history("/login");
      } else {
        LoadingFalse();
        alert(`fail ${data.message}`);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      alert(`Please Logout First then signup`);
      history("/");
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
                  <div className="col-md-6 col-10 order-sm-1 order-md-0">
                    <h1 className="mt-5" id="signup-heading">
                      Sign <span id="logohalfcolorchange">Up</span>
                    </h1>
                    <form method="POST" className="mt-3">
                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-3">
                          <i className="zmdi zmdi-account zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          required
                          onChange={handleInputs}
                          value={user.name}
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-email zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          required
                          onChange={handleInputs}
                          value={user.email}
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-phone-in-talk zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          required
                          onChange={handleInputs}
                          value={user.phone}
                          type="number"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Your Phone"
                        />
                      </div>
                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-slideshow zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          required
                          onChange={handleInputs}
                          value={user.work}
                          type="text"
                          className="form-control"
                          id="work"
                          name="work"
                          placeholder="Your Profession"
                        />
                      </div>
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
                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-email zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          accept="image/*"
                          required
                          onChange={handlePhoto}
                          type="file"
                          className="form-control"
                          id="photo"
                          name="photo"
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
                  <div className="col-md-6 col-10 order-sm-0 order-md-1 d-flex flex-column align-items-center justify-content-center ">
                    <NavLink
                      exact="true"
                      className="navbar-brand text-dark btn btn-outline-success btn-lg"
                      to="/login"
                    >
                      I am already registered
                    </NavLink>
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
export default Signup;
