import { useEffect } from "react";
import { createConnection } from "./chat";

export function useChatRoom({ roomId, serverUrl }) {
  useEffect(() => {
    const connection = createConnection(roomId, serverUrl);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);
}
