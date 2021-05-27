import socket from "./socket";

const createUser = (username: string) => {
  socket.emit("createUser", { username });
};

export default createUser;
