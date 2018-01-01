import express from 'express'

import config from './config'

let _server

const server = {
  start () {
    const app = express()

    config(app)

    // Rutas
    app.get('/', (req, res, next) => {
      res
        .status(200)
        .json({ data: 'metodo get' })
    })

    app.post('/', (req, res, next) => {
      res
        .status(200)
        .json({ data: 'metodo post' })
    })

    app.put('/', (req, res, next) => {
      res
        .status(200)
        .json({ data: 'metodo put' })
    })

    app.delete('/', (req, res, next) => {
      res
        .status(200)
        .json({ data: 'metodo delete' })
    })

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
