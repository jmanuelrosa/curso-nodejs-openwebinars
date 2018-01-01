import express from 'express'
import jwt from 'jwt-simple'

const router = express.Router()

router
  .post('/', (req, res, next) => {
    const payload = {
      email: req.params.email
    }

    return res
      .status(200)
      .send({ token: jwt.encode(payload, req.app.locals.config.TOKEN) })
  })

export default router
