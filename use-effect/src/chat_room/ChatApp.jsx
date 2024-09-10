import { useEffect, useState } from "react";
import { createConnection } from "./chat";
import { useChatRoom } from "./useChatRoom";

const ChatRoom = ({ roomId }) => {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl,
  });

  return (
    <>
      <label>
        <h4>Server URL:</h4>
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
};

export default function ChatApp() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">General</option>
          <option value="travel">Travel</option>
          <option value="music">Music</option>
        </select>
        <button onClick={() => setShow(!show)}>
          {show ? "Close chat" : "Open chat"}
        </button>
      </label>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
