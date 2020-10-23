const express = require('express')

const app = express();

app.use("/", express.static(__dirname + "/public"));
app.use("/css",express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));

app.listen(3001, ()=> {
    console.log('The serve is running at PORT 3001');
})

