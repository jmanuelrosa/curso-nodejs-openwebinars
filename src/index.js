import http from 'http'

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
  // response.setHeader('Content-Type', 'application/json')
  // response.statusCode = 404

  if (request.method === 'GET') {
    response.write('<h1>Metodo valido</h1>')
    return response.end()
  }

  response.write('<h1>Esta intentando acceder con un metodo no valido</h1>')
  return response.end()
})

server.listen(8000, 'localhost', err => {
  if (err) {
    return console.log('Error: ', err)
  }

  console.log('Server opened listen on http://localhost:8000')
})
