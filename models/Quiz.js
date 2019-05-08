const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  gifs: {
    type: [String],
    required: true
  },
  next: {
    type: [Schema.Types.ObjectId],
    ref: 'Next'
  },
  username: {
    type: String
  }
});

QuizSchema.index({
  '$**': 'text'
});

module.exports = mongoose.model('Quiz', QuizSchema);
