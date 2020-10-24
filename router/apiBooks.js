const express = require('express');

const books = express();


books.get('/api/Books', (req,res) => {
    res.json({
        is:"working"
    })
});

module.exports = books;