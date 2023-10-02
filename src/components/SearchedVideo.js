import { useMemo, useState } from "react";
import { findNthPrime } from "../Utils/helper";

const SearchedVideo = () => {
  const [text, setText] = useState();

  const [isDark, setIsDark] = useState(false);
  //const prime = useMemo(() => findNthPrime(text), [text]);
  const prime = findNthPrime(text);

  return (
    <div
      className={
        (isDark && " text-white bg-gray-900") +
        " m-2 p-2 h-96 w-96 border border-black "
      }
    >
      <button
        className="bg-green-300 border "
        onClick={() => setIsDark(!isDark)}
      >
        Toogle
      </button>
      <br />
      <input
        type="number"
        className="my-5 border border-black text-black"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <br />

      <h1>Nth prime is : {prime}</h1>
    </div>
  );
};

export default SearchedVideo;
