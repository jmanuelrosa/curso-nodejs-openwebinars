import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'

import router from './router'

let _server

const server = {
  start () {
    const app = express()

    app.disable('x-powered-by')

    app.set('env', process.env.NODE_ENV)

    if (process.env.NODE_ENV !== 'test') {
      app.use(logger('combined'))
    }

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'pug')

    // Rutas
    router(app)

    app.use(
      '/static',
      express.static(path.join(__dirname, 'public'))
    )

    app.use((req, res, next) => {
      res.render('404', {
        title: 'Open Webinars',
        message: `La ruta no existe!!!!!`
      })
      next()
    })

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
