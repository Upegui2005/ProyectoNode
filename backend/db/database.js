const mongoose = require('mongoose');
require('dotenv').config(); 

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusteradsoficha2557466.hbpe9cs.mongodb.net/?retryWrites=true&w=majority`

function connect() {
    mongoose.connect(uri)
    .then(() => {
        console.log('Conectado')
    })
    .catch(err => {
        console.log('Error' + err)
    })
}

module.exports = { connect };