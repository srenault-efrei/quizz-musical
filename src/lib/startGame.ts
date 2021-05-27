import socket from "./socket";

const startGame = (user_uuid: string, gameId: string) => {
  socket.emit("start", { user_uuid, gameId });
};

export default startGame;
