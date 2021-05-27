import io from 'socket.io-client'

const socket = io('https://quizz-musical-back.herokuapp.com', {
  extraHeaders: {
    'my-custom-header': 'abcd',
  },
})

export default socket
