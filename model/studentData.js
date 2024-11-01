const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        unique: true,
        required: true,
    },

    subjects: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

var studentData = mongoose.model('studentData', studentSchema)
module.exports = studentData 