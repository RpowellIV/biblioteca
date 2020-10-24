require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

const apiMain = require('./router/main');
const apiHeartbeat = require('./router/apiHeartbeat');

const app = express();

app.use("/", express.static(__dirname + "/public"));
app.use("/css",express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));


app.use('/', apiMain);

app.use('/api/apiHeartbeat', apiHeartbeat);

// app.get('/heartbeat', (req,res) => {
//     res.json({
//         is:"working"
//     })
// });


app.listen(3001, ()=> {
    console.log('The server is running at PORT 3001');
})

