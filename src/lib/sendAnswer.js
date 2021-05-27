import socket from "./socket";

const sendAnswer = (user_uuid, gameId, correct) => {
  socket.emit("answer", { user_uuid, gameId, correct });
};

export default sendAnswer;
