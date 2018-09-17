const mongoose = require('mongoose')
const Schema = mongoose.Schema

let articleSchema = new Schema({
  title: {type: String, required: true, max: 30},
  content: {type: String, required: true, max: 100},
  owner: {type: Number, required: true},
  done: {type: Boolean, required: true}
})

module.exports = mongoose.model('Article', articleSchema)
