const express = require('express');
const books = express();
const fetch = require('node-fetch')

// module.exports = (app, fetch) => {
books.get("/books", async (req,res) => {
    const { author, title } = req.body;
    const params = `${title ? "title=" + title: ''}${author ? "&author=" + author : ''}`;
        fetch(`http://openlibrary.org/search.json?${params}&limit=10`)
            .then(result => result.json())
            .then(data => res.json(data)) 
            .catch(err => console.log(err))
        });
    // }

module.exports = books;

