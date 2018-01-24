const mongoose = require('../config/database')
const { Schema } = mongoose

const batchSchema = new Schema({
  name: { type: String, required: true },
  startDate: { type: String, require: true },
  endDate: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('batches', batchSchema)
