import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../Utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      //  console.log("APT calls here");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25),
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="pl-2 font-medium m-2 mt-[0.2rem]  w-full h-[600px] rounded-lg border overflow-y-scroll flex flex-col-reverse bg-slate-100 border-black">
        <div>
          {/*<ChatMessage name="Dinesh" message="This Youtube App 😎" />*/}
          {chatMessages.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("on submit ", liveMessage);
          dispatch(
            addMessage({
              name: "Dinesh",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="px-2 w-72"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="ml-2 w-20 bg-green-200 rounded-xl">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
