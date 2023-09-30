import React from "react";
import { useSelector } from "react-redux";
import { USER_IMG } from "../Utils/constants";

const AccountDetails = () => {
  const checkDetails = useSelector((store) => store.app.accountDetailsIsOpen);
  console.log(checkDetails);
  if (!checkDetails) return null;

  return (
    <div className="shadow-lg w-1/6 absolute h-96 -my-12 right-40 bg-slate-50">
      <div className="p-2 m-2 flex flex-col">
        <div className="flex">
          <img src={USER_IMG} alt="" className="h-8 cursor-pointer" />
          <h1 className="mx-3 font-bold">Dinesh Choudhary</h1>
          <p className="mt-6 -mx-[152px] ">@dchoudhary44200</p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
