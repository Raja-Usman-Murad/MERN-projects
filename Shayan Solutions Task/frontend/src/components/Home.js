import React, { useEffect, useContext } from "react";

import listContext from "../context/lists/ListContext";

const Home = () => {
  const context = useContext(listContext);
  const { getUser, userDetail } = context;

  useEffect(() => {
    if (localStorage.getItem("token") && !userDetail) {
      getUser();
    }

    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h1>Shayan Solutions</h1>
      <h2>MERN Evaluation</h2>
      <h3>Todo Task App</h3>
      <h4>Created By Raja Usman Murad</h4>
      <h5>Features:</h5>
      <ul>
        <li>User Can SignUp</li>
        <li>User Can SignIn</li>
        <li>User Can Logout</li>
        <li>User Can update Password</li>
        <li>User Can reset Password</li>
        <li>User Can update Details</li>
        <li>User Can forgot Password using (mailtrap)</li>
        <li>User Can Add lists </li>
        <li>User Can Update lists </li>
        <li>User Can Delete lists </li>
        <li>User Can read all lists </li>
      </ul>
      <h5 className="">Technology Used:</h5>
      <ul>
        <li>ReactJs</li>
        <li>NodeJs</li>
        <li>ExpressJs</li>
        <li>MongoDB (database connect online mongodb Atlas)</li>
      </ul>
    </>
  );
};

export default Home;
