import React, { useState } from "react";
import ListContext from "./ListContext";

const ListState = (props) => {
  const listInitial = [];
  const [lists, setlists] = useState(listInitial);
  const [userDetail, setUserDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // get User
  const getUser = async () => {
    //TODO API CALL
    LoadingActive();
    const res = await fetch(`http://localhost:5000/getuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    if (data.status === "success") {
      setUserDetail(data.data.user);
      LoadingFalse();
    } else {
      LoadingFalse();
    }
  };
  //Get ALL Lists
  const getAllnotes = async () => {
    LoadingActive();
    //TODO API CALL
    const res = await fetch(`http://localhost:5000/fetchalllists`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    if (data.status === "success") {
      setlists(data.data.lists);
      LoadingFalse();
    } else {
      LoadingFalse();
    }
  };

  //Add a Lists
  const addList = async (title, description, date) => {
    LoadingActive();
    //TODO API CALL
    const res = await fetch(`http://localhost:5000/addlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ title, description, date }),
    });
    const data = await res.json();
    if (data.status === "success") {
      let list = data.data.saveList;
      setlists(lists.concat(list));
      LoadingFalse();
    } else {
      LoadingFalse();
    }
  };
  //deleteNote a Lists
  const deleteList = async (id) => {
    LoadingActive();
    //TODO API CALL
    const res = await fetch(`http://localhost:5000/deletelist/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    let newList = lists.filter((list) => {
      return list._id !== id;
    });
    if (res.ok) {
      setlists(newList);
      LoadingFalse();
    } else {
      LoadingFalse();
    }
  };

  //update a Lists
  const editList = async (id, title, description, date) => {
    LoadingActive();
    //TODO API CALL
    const res = await fetch(`http://localhost:5000/updatelist/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ title, description, date }),
    });
    const data = await res.json();
    let newLists = JSON.parse(JSON.stringify(lists));
    for (let index = 0; index < newLists.length; index++) {
      const element = newLists[index];
      if (element._id === id) {
        newLists[index].title = title;
        newLists[index].description = description;
        newLists[index].date = date;
        break;
      }
    }
    if (data.status === "success") {
      setlists(newLists);
      LoadingFalse();
    } else {
      LoadingFalse();
    }
  };

  const LoadingActive = () => setIsLoading(true);
  const LoadingFalse = () => setIsLoading(false);

  return (
    <ListContext.Provider
      value={{
        userDetail,
        getUser,
        lists,
        addList,
        deleteList,
        editList,
        getAllnotes,
        isLoading,
        LoadingActive,
        LoadingFalse,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListState;
