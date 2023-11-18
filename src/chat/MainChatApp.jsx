import React, { useState } from "react";

import SingleChatScreen from "./SingleChatScreen";
import AllChatsContainer from "./AllChatsContainer";
import "../App.css";

const allChats = [
  {
    name: "Srinu",
    chatType: "private",
    messages: [
      { sentAt: "1-11-2023 10am", message: "hello there" },
      { sentAt: "1-11-2023 11am", message: "this is srinu" },
    ],
  },
  {
    name: "Gani",
    chatType: "private",
    messages: [
      { sentAt: "1-11-2023 10am", message: "hey there" },
      { sentAt: "1-11-2023 11am", message: "this is ganesh" },
    ],
  },
  {
    name: "sagar",
    chatType: "private",
    messages: [
      { sentAt: "1-11-2023 10am", message: "hey gani" },
      { sentAt: "1-11-2023 11am", message: "this is sagar" },
    ],
  },
  {
    name: "durga",
    chatType: "private",
    messages: [
      { sentAt: "1-11-2023 10am", message: "hey " },
      { sentAt: "1-11-2023 11am", message: "this is durga" },
    ],
  },
];

const MainChatApp = () => {
  const [openChat, setOpenChat] = useState(allChats[0]);

  const handleChat = (d) => {
    console.log(d, "what here");
    setOpenChat(d);
  };
  return (
    <div className="mainappcontainer">
      <div className="allChatContainer">
        <AllChatsContainer
          allChats={allChats}
          handleChat={handleChat}
          openChat={openChat}
        />
      </div>
      <div className="singleChatContainer">
        <SingleChatScreen openChat={openChat} />
      </div>
    </div>
  );
};
export default MainChatApp;
