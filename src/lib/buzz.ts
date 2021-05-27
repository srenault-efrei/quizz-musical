import socket from "./socket";

const buzz = (username: string, gameId: string) => {
  socket.emit("buzz", { username, gameId });
};

export default buzz;
