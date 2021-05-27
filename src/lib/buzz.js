import socket from './socket'

const buzz = (username, gameId) => {
  socket.emit('buzz', { username, gameId })
}

export default buzz
