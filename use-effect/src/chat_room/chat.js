export function createConnection(roomID, serverUrl) {
  return {
    connect() {
      console.log('Connecting to "' + roomID + '" room at ' + serverUrl);
    },
    disconnect() {
      console.log('Disconnected form "' + roomID + '" room at ' + serverUrl);
    },
  };
}
