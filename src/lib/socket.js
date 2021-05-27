import io from 'socket.io-client'

const socket = io(process.env.ENDPOINT, {
  extraHeaders: {
    'my-custom-header': 'abcd',
  },
})

export default socket
