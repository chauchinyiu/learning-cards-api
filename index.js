const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {pool} = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const getCards = (request, response) => {
  var categoryQuery = ''
  if (request.query.category) {
      categoryQuery = "where category = '" + request.query.category + "'"
  }

  pool.query('SELECT * FROM cards ' + categoryQuery, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCategories = (request, response) => {
  pool.query('SELECT distinct category FROM cards', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addCard = (request, response) => {
  const {english, german, chinese, category} = request.body

  pool.query(
    'INSERT INTO cards (english, german, chinese, category) VALUES ($1, $2, $3, $4)',
    [english, german, chinese, category],
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

app
  .route('/categories')
  .get(getCategories)

// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})