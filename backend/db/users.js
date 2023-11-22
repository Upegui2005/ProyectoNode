const mongoose = require('mongoose');
const { Schema } = mongoose;

const users = new Schema({
    name: {
        type: String,
        require: true,
    },
    apellido: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }
})