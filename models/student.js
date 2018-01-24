const mongoose = require('../config/database')
const { Schema } = mongoose

const studentSchema = new Schema({
  firstName: {  type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, default: 'http://via.placeholder.com/500x180?text=No%20Image' },
  green: { type: Boolean, default: false },
  yellow: { type: Boolean, default: false },
  red: { type: Boolean, default: false },
  selectColor: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  authorId: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('students', studentSchema)
  
