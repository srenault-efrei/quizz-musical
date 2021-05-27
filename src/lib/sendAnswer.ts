import socket from "./socket";

const sendAnswer = (user_uuid: string, gameId: string, correct: boolean) => {
  socket.emit("answer", { user_uuid, gameId, correct });
};

export default sendAnswer;
