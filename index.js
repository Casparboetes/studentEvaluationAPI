const express = require('express')
const { Student } = require('./models')

const port = process.env.PORT || 3030

let app = express()

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

app.get('/students', (req, res, next) => {
  Student.find()
    // Newest recipes first
    .sort({ createdAt: -1 })
    // Send the data in JSON format
    .then((students) => res.json(students))
    // Forward any errors to error handler
    .catch((error) => next(error))
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
