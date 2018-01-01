import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'

let _server

const server = {
  start () {
    const app = express()

    _server = app.listen('9000', () => {
      if (process.env.NODE_ENV !== 'test') {
        console.log('Server opened listen on http://localhost:9000')
      }
    })
  },
  close () {
    _server.close()
  }
}

export default server

if (!module.parent) {
  server.start()
}
