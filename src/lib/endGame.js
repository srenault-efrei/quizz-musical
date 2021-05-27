import socket from "./socket";

const endGame = (winner, user_uuid, gameId) => {
  socket.emit("endGame", { winner, user_uuid, gameId });
};

export default endGame;
