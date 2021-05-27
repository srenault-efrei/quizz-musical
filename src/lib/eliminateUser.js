import socket from './socket'

const eliminateUser = (username, gameId) => {
  socket.emit('eliminate', { username, gameId })
}

export default eliminateUser
