import music from './routes/music'
import user from './routes/me'

export default app => {
  app.use('/me', user)
  app.use('/music', music)
}
