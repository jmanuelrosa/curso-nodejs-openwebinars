import express from 'express'

import mocks from '../../mocks'

const router = express.Router()

router
  .get('/', (req, res, next) => {
    res
      .status(200)
      .json(mocks)
  })
  .post('/', (req, res, next) => {
    console.log('Body received:', req.body)

    res
      .status(201)
      .json(req.body)
  })

router.get('/:singer', (req, res, next) => {
  console.log('a', req.params.singer)
  const songsBySingers = mocks
    .filter(item =>
      item.singer.toLowerCase() === req.params.singer.toLowerCase()
    )

  res
    .status(200)
    .json(songsBySingers)
})

export default router
