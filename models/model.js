const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    
    branch:{
        required: true,
        type: String
    },
    question: {
        required: true,
        type: String
    },
    option1: {
        required: true,
        type: String
    },
    option2:{
        required: true,
        type: String
    },
    option3:{
          required: true,
          code: 'ESERVFAIL',
          type: String
    },
    option4:{
           required: true,
           type: String
    },
    correct_answer: {
        required: true,
        type: String
    },
    incorrect_answers:{
        require: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)