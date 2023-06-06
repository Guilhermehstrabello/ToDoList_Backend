const mongoose = require('mongoose')

//Criando as opções que o ToDo terá
const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('ToDo', todoSchema)