import got from 'got'
import { expect } from 'chai'
import cheerio from 'cheerio'

import server from '../src'

describe('Home', () => {
  beforeEach(() => {
    server.start()
  })

  afterEach(() => {
    server.close()
  })

  describe('/GET /', () => {
    it('it should GET', async () => {
      const response = await got('http://localhost:9000')
      const $ = cheerio.load(response.body)

      expect($('body').hasClass('home')).to.be.true
    })
  })
})
