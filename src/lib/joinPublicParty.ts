import socket from "./socket";

const joinPublicParty = (
  username: string,
  user_uuid: string,
  themeId: string
) => {
  socket.emit("joinPublic", { username, user_uuid, themeId });
};

export default joinPublicParty;
