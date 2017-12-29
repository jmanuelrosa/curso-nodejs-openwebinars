import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.write(`
    <h1>Curso NodeJS de OpenWebinars!</h1>
    <h2>Temario del curso</h2>
  `)
  res.end()
})

export default router
