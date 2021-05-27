import socket from './socket'

const startGame = (user_uuid, gameId) => {
  socket.emit('start', { user_uuid, gameId })
}

export default startGame
