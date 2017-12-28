import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.end('Hola Mundo!')
})

<<<<<<< HEAD
app.listen('9000', () => {
  console.log('Server opened listen on http://localhost:9000')
})
=======
app.listen('9000')
>>>>>>> Add basic express server
