import React, { useEffect, useContext } from "react";

import AddListItem from "./AddListItem";
import MyLists from "./MyLists";
import Spinner from "./Spinner";
import listContext from "../context/lists/ListContext";

const List = () => {
  const context = useContext(listContext);
  const { getUser, isLoading, userDetail } = context;

  useEffect(() => {
    if (localStorage.getItem("token") && !userDetail) {
      getUser();
    }

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading && <Spinner />}

      <AddListItem />
      <MyLists />
    </>
  );
};
export default List;
