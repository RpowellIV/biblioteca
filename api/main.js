const express = require('express');

const router = express();

router.get('/home', (req,res) => {
    res.json({
        location:"home"
    })
})

module.exports = router;