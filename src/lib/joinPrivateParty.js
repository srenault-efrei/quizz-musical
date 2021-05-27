import socket from "./socket";

const joinPrivateParty = (user_uuid, username, gameId) => {
  socket.emit("joinPrivate", { user_uuid, username, gameId });
};

export default joinPrivateParty;
