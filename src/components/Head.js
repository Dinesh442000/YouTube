import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { json } from "react-router-dom";
import { cacheResult } from "../Utils/searchSlice";

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
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII="
          alt="menu"
          className="h-8 cursor-pointer"
        />
        <a href="">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="h-14 mx-5 -my-3"
          />
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
      <div className="col-span-1 ">
        <img
          src="data:image/png;base64,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"
          alt=""
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
