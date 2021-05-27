import socket from "./socket";

const createUser = (username) => {
  socket.emit("createUser", { username });
};

export default createUser;
