import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_IMG } from "../Utils/constants";

import { showAccountDetails } from "../Utils/appSlice";

const AccountDetails = () => {
  const checkDetails = useSelector((store) => store.app.accountDetailsIsOpen);
  const dispatch = useDispatch();
  console.log(checkDetails);
  //if (checkDetails) return null;
  const handleClose = () => {
    dispatch(showAccountDetails());
  };

  return (
    checkDetails && (
      <div className="shadow-lg w-1/6 absolute  h-96 -my-12 right-40 bg-slate-50">
        <div className="p-2 m-2 flex flex-col">
          <p
            className="ml-auto flex cursor-pointer"
            onClick={() => handleClose()}
          >
            ✖
          </p>
          <div className="flex">
            <img src={USER_IMG} alt="" className="h-8 cursor-pointer" />
            <h1 className="mx-3 font-bold">Dinesh Choudhary</h1>

            <p className="mt-6 -mx-[152px] ">@dchoudhary44200</p>
          </div>
        </div>
      </div>
    )
  );
};

export default AccountDetails;
