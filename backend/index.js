const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const path = require('path');
require('dotenv').config(); 

const { connect } = require('./db/database');

app.set('port', process.env.PORT || 9999);
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.use('../frontend/assets', express.static(path.join(__dirname, 'assets')))
app.set('view engine', 'ejs');

app.use('', require('./routes/route'))

async function startServer() {
    try {
        await connect();
        app.listen(app.get('port'), () => {
            console.log('Server activo', app.get('port'));
        })
    } catch (err) {
        console.error('Error' + err);
    }
}

startServer()