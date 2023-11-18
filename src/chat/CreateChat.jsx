import React, { useState } from "react";

const CreateChat = ({ handleAddNewChat }) => {
  const [showInputForNewUser, setShowInputForNewUser] = useState(false);
  const [newUser, setNewuser] = useState("");

  const handleUser = (e) => {
    setNewuser(e.target.value);
  };

  return (
    <div
      className="createButton"
      onClick={() => {
        setShowInputForNewUser(true);
      }}
    >
      {showInputForNewUser ? (
        <>
          <input
            placeholder="Add New Chat"
            onChange={(e) => handleUser(e)}
            value={newUser}
          />
          <div
            onClick={() => {
              setNewuser("");
              handleAddNewChat(newUser);
            }}
          >
            Save
          </div>
        </>
      ) : null}
      Create New Chat
    </div>
  );
};
export default CreateChat;
