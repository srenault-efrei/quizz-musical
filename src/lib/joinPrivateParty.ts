import socket from "./socket";

const joinPrivateParty = (
  user_uuid: string,
  username: string,
  gameId: string
) => {
  socket.emit("joinPrivate", { user_uuid, username, gameId });
};

export default joinPrivateParty;
