import express from 'express'

import { send as wsSend } from '../socket'
import mocks from '../mocks'
import { auth } from '../middlewares'

const router = express.Router()

router
  .get('/', (req, res, next) => {
    wsSend(req.method, req.baseUrl, mocks)

    res
      .status(200)
      .json(mocks)
  })
  .post('/', auth, (req, res, next) => {
    res
      .status(201)
      .json(req.body)
  })

router
  .get('/:singer', (req, res, next) => {
    const songsBySingers = mocks
      .filter(item =>
        item.singer.toLowerCase() === req.params.singer.toLowerCase()
      )

    wsSend(req.method, req.baseUrl, songsBySingers)

    res
      .status(200)
      .json(songsBySingers)
  })

export default router
