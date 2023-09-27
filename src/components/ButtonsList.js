import React from "react";
import Button from "./Button";

const ButtonsList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "Cooking",
    "Movies",
    "All",
    "Gaming",
  ];

  return (
    <div className="flex">
      <Button name="All" />
      {list.map((item, key) => (
        <Button key={key} name={item} />
      ))}
    </div>
  );
};

export default ButtonsList;
