import socket from "./socket";

const endGame = (winner: string, user_uuid: string, gameId: string) => {
  socket.emit("endGame", { winner, user_uuid, gameId });
};

export default endGame;
