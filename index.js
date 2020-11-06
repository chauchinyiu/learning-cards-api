const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {pool} = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const getCards = (request, response) => {
  pool.query('SELECT * FROM cards', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addCard = (request, response) => {
  const {english, german, chinese, ImageURL} = request.body

  pool.query(
    'INSERT INTO cards (english, german, chinese, ImageURL) VALUES ($1, $2, $3, $4)',
    [english, german, chinese, ImageURL],
    (error) => {
      if (error) {
        throw error
      }
      response.status(201).json({status: 'success', message: 'Card added.'})
    },
  )
}

app
  .route('/cards')
  // GET endpoint
  .get(getCards)
  // POST endpoint
  .post(addCard)

// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})