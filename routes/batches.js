const router = require('express').Router()
const { Batch } = require('../models')

router.get('/batch', (req, res, next) => {
  Batch.find()
    // Newest batch first
    .sort({ createdAt: -1 })
    // Send the data in JSON format
    .then((batch) => res.json(batch))
    // Throw a 500 error if something goes wrong
    .catch((error) => next(error))
  })
  .get('/batch/:id', (req, res, next) => {
    const id = req.params.id
    Batch.findById(id)
      .then((batch) => {
        if (!batch) { return next() }
        res.json(batch)
      })
      .catch((error) => next(error))
  })
  .post('/batch', (req, res, next) => {
    let newBatch = req.body

    Batch.create(newBatch)
      .then((batch) => res.json(batch))
      .catch((error) => next(error))
  })

  .put('/batch/:id', (req, res, next) => {
    const batchId = req.params.id
    let update = req.body

    Batch.findOneAndUpdate(batchId,update)
      .then((batch) => {
        if (!batch) { return next() }
        res.json(batch)
      })
      .catch((error) => next(error))
  })

  .patch('/batch/:id', (req, res, next) => {
    const batchId = req.params.id
    let update = req.body

    Batch.findOneAndUpdate(batchId,update)
      .then((batch) => {
        if (!batch) { return next() }
        res.json(batch)
      })
      .catch((error) => next(error))
  })

  .delete('/batch/:id', (req, res, next) => {
    const batchId = req.params.id

    Batch.findOneAndRemove(batchId)
      .then((batch) => {
        if (!batch) { return next() }
        res.json(batch)
      })
      .catch((error) => next(error))
  })

module.exports = router
