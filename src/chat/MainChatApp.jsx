import React, { useEffect, useState } from "react";

import SingleChatScreen from "./SingleChatScreen";
import AllChatsContainer from "./AllChatsContainer";
import "../App.css";
import CreateChat from "./CreateChat";
const allChatsLocal = [
  {
    name: "Srinu",
    chatType: "private",
    messages: [
      { sentAt: "1-11-2023 10am", message: "hello there", type: "SENT" },
      { sentAt: "1-11-2023 11am", message: "this is srinu", type: "SENT" },
    ],
  },
  {
    name: "Gani",
    chatType: "private",
    messages: [
      { sentAt: "1-11-2023 10am", message: "hey there", type: "SENT" },
      { sentAt: "1-11-2023 11am", message: "this is ganesh", type: "SENT" },
    ],
  },
  {
    name: "sagar",
    chatType: "private",
    messages: [
      { sentAt: "1-11-2023 10am", message: "hey gani", type: "SENT" },
      { sentAt: "1-11-2023 11am", message: "this is sagar", type: "SENT" },
    ],
  },
  {
    name: "durga",
    chatType: "private",
    messages: [
      { sentAt: "1-11-2023 10am", message: "hey ", type: "SENT" },
      { sentAt: "1-11-2023 11am", message: "this is durga", type: "SENT" },
    ],
  },
];

const MainChatApp = () => {
  const [allChats, setAllChats] = useState(allChatsLocal);
  const [openChat, setOpenChat] = useState(allChats[0]);

  const handleChat = (d) => {
    console.log(d, "what here");
    setOpenChat(d);
  };

  const handleAddNewChat = (newUser) => {
    console.log(newUser, "coming here");

    setAllChats([
      ...allChats,
      { name: newUser, chatType: "Private", messages: [] },
    ]);
  };

  // useEffect(()=>{
  //   setAllChats()
  // },[])
  return (
    <>
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
      <CreateChat handleAddNewChat={handleAddNewChat} />
    </>
  );
};

export default MainChatApp;
