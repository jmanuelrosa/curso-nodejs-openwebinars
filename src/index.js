import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'

const app = express()

app.disable('x-powered-by')

app.set('env', 'development')

app.use(logger('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Rutas
app.get('/', (req, res, next) => {
  res.render('home', {
    title: 'Open Webinars',
    message: 'Curso NodeJS de OpenWebinars!'
  })
})

app.get('/temario', (req, res, next) => {
  res.render('temario', {
    title: 'Open Webinars'
  })
})

app.get('/:user', (req, res, next) => {
  res.render('user', {
    title: 'Open Webinars',
    message: `Bienvenido usuario ${req.params.user}`
  })
})

app.use(
  '/static',
  express.static(path.join(__dirname, 'public'))
)


app.use((req, res, next) => {
  res.render('404', {
    title: 'Open Webinars',
    message: `La ruta no existe!!!!!`
  })
  next(err)
})

app.listen('9000', () => {
  console.log('Server opened listen on http://localhost:9000')
})
