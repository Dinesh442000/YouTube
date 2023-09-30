import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import MainConatiner from "./MainConatiner";

import WatchPage from "./WatchPage";
import AccountDetails from "./AccountDetails";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <AccountDetails />
      <Outlet />
    </div>
  );
};

export default Body;
