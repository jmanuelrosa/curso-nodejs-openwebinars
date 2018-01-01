import express from 'express'

import config from './config'
import router from './router'

let _server

const server = {
  start () {
    const app = express()

    config(app)
    router(app)

    _server = app.listen(app.locals.config.PORT, () => {
      const address = _server.address()
      const host = address.address === '::'
        ? 'localhost'
        : address

      const port = app.locals.config.PORT
      if (process.env.NODE_ENV !== 'test') {
        console.log(`Server opened listen on http://${host}:${port}`)
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
