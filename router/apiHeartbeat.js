const express = require('express');

const heart = express();


heart.get('/heartbeat', (req,res) => {
    res.json({
        is:"working"
    })
});

module.exports = heart;