const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const path = require('path');
require('dotenv').config(); 

const { connect } = require('./backend/db/database');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.set('port', process.env.PORT || 9999);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './frontend/views'))

app.use(express.static('./frontend/assets/'))
app.use('', require('./backend/routes/route'))

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