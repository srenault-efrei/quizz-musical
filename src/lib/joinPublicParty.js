import socket from "./socket";

const joinPublicParty = (username, user_uuid, themeId) => {
  socket.emit("joinPublic", { username, user_uuid, themeId });
};

export default joinPublicParty;
