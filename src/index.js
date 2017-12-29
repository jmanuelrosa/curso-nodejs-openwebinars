import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'

import router from './router'

const app = express()

app.disable('x-powered-by')

app.set('env', 'development')

app.use(logger('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

router(app)

app.use((req, res, next) => {
  const err = new Error('La ruta no existe !!!!')
  err.status = 404
  next(err)
})

app.listen('9000', () => {
  console.log('Server opened listen on http://localhost:9000')
})
