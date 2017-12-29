import home from './routes/home'
import temario from './routes/temario'

export default app => {
  app.use('/', home)
  app.use('/temario', temario)

  return app
}
