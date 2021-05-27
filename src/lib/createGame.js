import socket from './socket'

const createGame = (user_uuid, theme_id, is_private) => {
  socket.emit('createGame', { user_uuid, theme_id, is_private })
}

export default createGame
