const express = require('express');

//const { Router } = requir('express')
//const router = express.Router();

const heart = express();


heart.get('/', (req,res) => {
    res.json({
        is:"working"
    })
});

module.exports = heart;