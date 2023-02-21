const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  }
});

const todoModel = mongoose.model('Todo', todoSchema);
module.exports = todoModel;