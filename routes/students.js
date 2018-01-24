const router = require('express').Router()
const { Student } = require('../models')

router.get('/students', (req, res, next) => {
  Student.find()
    // Newest students first
    .sort({ createdAt: -1 })
    // Send the data in JSON format
    .then((students) => res.json(students))
    // Throw a 500 error if something goes wrong
    .catch((error) => next(error))
  })
  .get('/students/:id', (req, res, next) => {
    const id = req.params.id
    Student.findById(id)
      .then((recipe) => {
        if (!recipe) { return next() }
        res.json(recipe)
      })
      .catch((error) => next(error))
  })
  .post('/students', (req, res, next) => {
    let newRecipe = req.body

    Student.create(newStudent)
      .then((recipe) => res.json(recipe))
      .catch((error) => next(error))
  })

module.exports = router
