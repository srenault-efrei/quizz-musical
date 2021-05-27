import socket from "./socket";

const eliminateUser = (username: string, gameId: string) => {
  socket.emit("eliminate", { username, gameId });
};

export default eliminateUser;
