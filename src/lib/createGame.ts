import socket from "./socket";

const createGame = (username: string) => {
  socket.emit("createUser", { username });
};

export default createGame;
