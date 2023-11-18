import React, { useEffect, useState } from "react";
import "../App.css";
const SingleChatScreen = ({ openChat }) => {
  const [chats, setChats] = useState(openChat);
  const [inputMessage, setInputMessage] = useState("");
  const hanldeChange = (e) => {
    setInputMessage(e.target.value);
  };

  useEffect(() => {
    setChats(openChat);
  }, [openChat]);

  const handleSendMessage = () => {
    const totalMessages = chats.messages;
    const sentAt = new Date().now;
    totalMessages.push({
      sentAt: sentAt,
      message: inputMessage,
    });
    setInputMessage("");
    setChats({ ...chats, messages: totalMessages });
  };

  return (
    <div className="single">
      {chats.messages.map((d) => {
        return <div className="eachMessage">{d.message}</div>;
      })}
      <div className="inputSend">
        <input
          placeholder="message input"
          onChange={(e) => hanldeChange(e)}
          value={inputMessage}
        />
        <div onClick={handleSendMessage}>Send</div>
      </div>
    </div>
  );
};
export default SingleChatScreen;
