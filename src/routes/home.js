import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('home', {
    title: 'Open Webinars',
    message: 'Curso NodeJS de OpenWebinars!'
  })
})

export default router
