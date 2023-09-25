import React from "react";
import Sidebar from "./Sidebar";
import MainConatiner from "./MainConatiner";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainConatiner />
    </div>
  );
};

export default Body;
