const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const challengeSchema = new Schema({
  title: {
      type: String,
      required: true,
  },
  body: {
    type: String,
    required: true,
  },
  output: {
      type: String,
      required: true,
  }
}, {
  timestamps: true,
});

const User = mongoose.model('Challenge', challengeSchema);

module.exports = User;