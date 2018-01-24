const mongoose = require('../config/database')
const { Schema } = mongoose

// const evalutionSchema = new Schema({
//   green: { type: Boolean, default: false },
//   yellow: { type: Boolean, default: false },
//   red: { type: Boolean, default: false },
//   remark: { type: String, required: false }
//   evaluationDate: { type: Date, default: Date.now }
// })

const studentSchema = new Schema({
  name: { type: String, required: false },
  photo: { type: String, default: 'http://via.placeholder.com/500x180?text=No%20Image' },
  green: { type: Boolean, default: false },
  yellow: { type: Boolean, default: false },
  red: { type: Boolean, default: false },
  remark: { type: String, required: false },
  evaluationDate: { type: Date, default: Date.now },
  authorId: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

const batchSchema = new Schema({
  name: { type: String, required: true },
  startDate: { type: String, require: true },
  endDate: { type: String, require: true },
  students: [studentSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('batches', batchSchema)
