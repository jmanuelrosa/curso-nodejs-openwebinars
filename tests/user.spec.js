import got from 'got'
import { expect } from 'chai'
import cheerio from 'cheerio'

import server from '../src'

describe('User', () => {
  beforeEach(() => {
    server.start()
  })

  afterEach(() => {
    server.close()
  })

  describe('/GET /jmanuelrosa', () => {
    it('it should GET', async () => {
      const response = await got('http://localhost:9000/jmanuelrosa')
      const $ = cheerio.load(response.body)

      expect($('.bd-title').text()).to.be.equal('Bienvenido usuario jmanuelrosa')
    })
  })
})
