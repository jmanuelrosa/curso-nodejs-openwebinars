import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
  res
    .status(200)
    .json({
      name: 'José Manuel',
      lastname: 'Rosa'
    })
})

export default router
