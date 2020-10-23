const express = require('express');

const router = expresss();
router.get('/home', (req,res) => {
    res.json({
        location:"home"
    })
})

module.exports = router;