require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const fetch = require('node-fetch');

const apiMain = require('./router/main');
const apiHeartbeat = require('./router/apiHeartbeat');
const apiBooks = require('./router/apiBooks');

const app = express();

app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/public"));
app.use("/css",express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));


app.use('/', apiMain);
app.use('/api/apiHeartbeat', apiHeartbeat);
app.use('/api', apiBooks);
// apiBooks(app, fetch);

app.listen(3001, ()=> {
    console.log('The server is running at PORT 3001');
})

