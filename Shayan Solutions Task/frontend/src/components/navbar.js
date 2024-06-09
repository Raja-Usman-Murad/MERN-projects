import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import listContext from "../context/lists/ListContext";
import Spinner from "./Spinner";

const Navbar = () => {
  const context = useContext(listContext);
  const { userDetail, getUser, isLoading } = context;
  const name = userDetail?.name?.toUpperCase();
  const history = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    history("/login");
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    }

    // eslint-disable-next-line
  });
  return (
    <>
      {isLoading && <Spinner />}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          RAJA USMAN MURAD
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active mr-4">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item ml-4">
              <NavLink className="nav-link" to="/list">
                List
              </NavLink>
            </li>
          </ul>

          {!localStorage.getItem("token") ? (
            <form className="form-inline my-2 my-lg-0 d-flex justify-content-center align-items-center">
              <ul className="navbar-nav ">
                <li className="nav-item ml-4">
                  <NavLink
                    className="nav-link btn btn-primary btn-sm mx-2"
                    to="/signup"
                  >
                    Signup
                  </NavLink>
                </li>
                <li className="nav-item ml-4">
                  <NavLink
                    className="nav-link btn btn-secondary btn-sm mx-2"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </form>
          ) : (
            <>
              <form className="form-inline my-2 my-lg-0 d-flex justify-content-center align-items-center">
                <ul className="navbar-nav ">
                  <li className="nav-item ">
                    <button
                      className="btn btn-danger mr-4 mx-2"
                      onClick={logoutHandler}
                    >
                      LogOut
                    </button>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="btn btn-secondary mx-2"
                      to="/updatepassword"
                    >
                      UpdatePassword
                    </NavLink>
                  </li>
                  <li className="nav-item ml-4">
                    <NavLink
                      className="btn btn-secondary mx-2"
                      to="/updateuser"
                    >
                      UpdateUser
                    </NavLink>
                  </li>
                  <li className="nav-item ml-4 mx-2">
                    <h4>USERNAME: {name}</h4>
                  </li>
                  <li className="nav-item ml-4 mx-2">
                    <img
                      className="img-fluid"
                      src={userDetail.photo}
                      width="30px"
                      alt="user"
                    ></img>
                  </li>
                </ul>
              </form>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
