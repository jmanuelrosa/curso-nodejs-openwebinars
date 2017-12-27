import net from 'net'

const server = net.createServer(socket => {
  socket.on('data', data => {
    console.log(data.toString())
    socket.write('Mundo?')
  })
})

server.on('error', err => {
  throw err
})

server.on('connect', () => console.log('socket connected'))

server.listen(
  {
    host: 'localhost',
    port: 8000,
    exclusive: true
  },
  () => console.log('Servidor socket abierto en ', server.address())
)
