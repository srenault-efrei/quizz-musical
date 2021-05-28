import socket from './socket'

const createUser = (username, avatarData) => {
  socket.emit('createUser', { username, avatarData })
}

export default createUser
