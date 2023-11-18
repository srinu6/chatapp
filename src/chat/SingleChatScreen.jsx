import React, { useEffect, useState } from "react";
import "../App.css";

const receiveMessage = [
  "this is receive 1",
  "receive 2",
  "this is receive 3",
  "receive 4",
  "this is receive 5",
  "receive 6",
  "this is receive 7",
  "receive 8",
  "this is receive 9",
  "this is receive 10",
];

const SingleChatScreen = ({ openChat }) => {
  const [chats, setChats] = useState(openChat);
  const [inputMessage, setInputMessage] = useState("");
  const hanldeChange = (e) => {
    setInputMessage(e.target.value);
  };

  useEffect(() => {
    setChats(openChat);
  }, [openChat]);

  const promise = new Promise((res, rej) => {
    const rand = inputMessage.length % 10;
    console.log(rand);
    res(receiveMessage[rand]);
  });

  const callForReceiveMessage = (inputMessage) => {
    promise.then((receive) => {
      const totalMessages = chats.messages;
      const sentAt = new Date().now;
      totalMessages.push({
        sentAt: sentAt,
        message: receive,
        TYPE: "RECEIVED",
      });
      setChats({ ...chats, messages: totalMessages });
      console.log(receive, "what receiveing");
    });
  };

  const handleSendMessage = () => {
    callForReceiveMessage(inputMessage);
    const totalMessages = chats.messages;
    const sentAt = new Date().now;
    totalMessages.push({
      sentAt: sentAt,
      message: inputMessage,
      TYPE: "SENT",
    });
    setInputMessage("");
    setChats({ ...chats, messages: totalMessages });
  };

  return (
    <div className="single">
      {chats.messages.map((d) => {
        console.log(d, "sent message");
        return (
          <div
            className={` ${
              d.TYPE === "SENT" ? "eachMessage" : "eachMessageReceive"
            }`}
          >
            {d.message}
          </div>
        );
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
