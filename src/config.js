import bodyParser from 'body-parser'
import logger from 'morgan'
import cors from 'cors'

export default app => {
  app.disable('x-powered-by')

  app.set('env', process.env.NODE_ENV)

  if (process.env.NODE_ENV !== 'test') {
    app.use(logger('combined'))
  }

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  app.use(cors())
}
