import { useDispatch, useSelector } from "react-redux";
import { showAccountDetails, toggleMenu } from "../Utils/appSlice";
import { useEffect, useState } from "react";
import {
  TOGGLE_IMG,
  USER_IMG,
  YOUTUBE_IMG,
  YOUTUBE_SEARCH_API,
} from "../Utils/constants";
import { Link, json } from "react-router-dom";
import { cacheResult } from "../Utils/searchSlice";
import MainConatiner from "./MainConatiner";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  // console.log(searchQuery);
  const toogleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const showUserAccountDetails = () => {
    dispatch(showAccountDetails());
  };

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(cacheResult({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    // console.log(searchQuery);
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-md">
      <div className="flex col-span-1 self-center">
        <img
          onClick={toogleMenuHandler}
          src={TOGGLE_IMG}
          alt="menu"
          className="h-8 cursor-pointer"
        />
        <a href="/">
          <img src={YOUTUBE_IMG} alt="" className="h-14 mx-5 -my-3" />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="px-5 w-1/2 border border-gray-500 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=" border border-gray-500 px-5 py-2 rounded-r-full bg-gray-100 ">
            🔎
          </button>
        </div>
        {showSuggestions && (
          <div className=" absolute bg-white py-2 px-2 w-[43.15rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 -mx-4 ">
        <img
          src={USER_IMG}
          alt=""
          className="h-8 cursor-pointer"
          onClick={showUserAccountDetails}
        />
      </div>
    </div>
  );
};

export default Head;
