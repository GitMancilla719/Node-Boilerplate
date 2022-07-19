const mongoose = require('mongoose')

const sampleSchema = new mongoose.Schema({
  sampleField1: {type: String, unique: true, required: true},
  sampleField2: {type: Number, required: true},
})

const sampleModel = mongoose.model('sampletableName', sampleSchema)

module.exports = sampleModel
