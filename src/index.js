import path from 'path'
import fs from 'fs'
import http from 'http'

const server = http.createServer((request, response) => {
  let filePath = request.url
  if (filePath === '/') {
    filePath = 'index.html'
  }
  filePath = `./src/${filePath}`

  const extname = path.extname(filePath)
  let contentType = 'text/html'

  switch (extname) {
    case '.css':
      contentType = 'text/css'
      break
  }
  response.writeHead(200, { 'Content-Type': `${contentType}; charset=UTF-8` })

  fs.readFile(filePath, (err, content) => {
    if (err) {
      return console.log(err)
    }

    response.write(content)
    return response.end()
  })
})

server.listen(8000, 'localhost', err => {
  if (err) {
    return console.log('Error: ', err)
  }

  console.log('Server opened listen on http://localhost:8000')
})
