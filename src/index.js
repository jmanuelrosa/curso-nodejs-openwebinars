// Check document is saved
// Connect: mongo
// > use films;
// > show dbs;
// > show dbs;
// After save: db.Film.find().pretty()

import mongoose from 'mongoose'

const host = 'mongodb://127.0.0.1:27017/films'

mongoose.set('debug', true)
mongoose.Promise = global.Promise

const connection =  mongoose.createConnection(
  host,
  { poolSize: 200 }
)

connection.on('error', err => {
  console.log(' ⚑ Mongo Error'.bold.red, err)
  return process.exit()
})

connection.on('connected', error => {
  console.log(' ▣ Connected to Database');
})

const filmSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, trim: true, required: true },
    poster: { type: String, trim: true, required: true }
  },
  {
    strict: false
  }
)

const Film = connection.model('Film', filmSchema)

const newDocument = new Film({
  _id: new mongoose.Types.ObjectId(),
  title: 'Star Wars: The Last Jedi',
  poster: 'https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711'
})
newDocument.save(err => {
  if (err) throw err
});
