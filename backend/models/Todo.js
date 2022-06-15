const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    date: {
        type: String, // Date
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
})

module.exports = Todo = mongoose.model('todo', TodoSchema);