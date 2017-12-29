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

app.get('/', (req, res) => {
  res.render('home')
  // res.render('homeVars', { title: 'Open Webinars!', message: 'Curso NodeJS!' })
})

app.listen('9000', () => {
  console.log('Server opened listen on http://localhost:9000')
})
