import React, { useEffect, useState } from "react";
import "../App.css";

const AllChatsContainer = ({ allChats, handleChat, openChat }) => {
  const [myAllChats, setMyAllChats] = useState(allChats);
  const handleDeleteChat = (name) => {
    const filter = myAllChats.filter((d) => d.name !== name);
    setMyAllChats(filter);
  };
  useEffect(() => {
    setMyAllChats(allChats);
  }, [allChats]);
  return (
    <div className="AllChats">
      {myAllChats.map((d) => (
        <div className="totalSingleChat">
          <div
            className={`oneChat ${openChat.name === d.name ? "openChat" : ""}`}
            onClick={() => handleChat(d)}
          >
            <img
              src="https://i.imgur.com/yXOvdOSs.jpg"
              alt="Hedy Lamarr"
              className="photo"
            />
            {d?.name}
          </div>
          <div onClick={() => handleDeleteChat(d?.name)}>Delete</div>
        </div>
      ))}
    </div>
  );
};
export default AllChatsContainer;
