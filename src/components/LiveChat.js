import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../Utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("APT calls here");
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
    <div className="pl-2 font-medium m-2 mt-[0.2rem]  w-full h-[600px] rounded-lg border overflow-y-scroll flex flex-col-reverse  bg-slate-100 border-black">
      {/*<ChatMessage name="Dinesh" message="This Youtube App 😎" />*/}
      {chatMessages.map((chat, index) => (
        <ChatMessage key={index} name={chat.name} message={chat.message} />
      ))}
    </div>
  );
};

export default LiveChat;
