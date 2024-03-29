const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const codeSchema = new Schema({
    pid: {
        type: String,
        required: true,
    },
    uid: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true
    }
}, {
  timestamps: true,
});

const Code = mongoose.model('Code', codeSchema);

module.exports = Code;