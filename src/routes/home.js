import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.write(`
    <h1>Curso NodeJS de OpenWebinars!</h1>
    <a href="/temario">Temario</a>
  `)
  res.end()
})

export default router
