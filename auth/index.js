// $().ready(()=>{
//         $('#form').submit((e) => {
//             e.preventDefault();
//             let userName = $('#username').val();
//             let email = $('#email').val();
//             console.log(`${userName} ${email} TEST!`);
//         })

//     })

const express = require('express');
const auth = express();
const fetch = require('node-fetch')


auth.get('/github', (req,res) => {
    console.log('button test');
    res.json({
        message:"AUTHORIZED!"
    })
});

module.exports = auth;




// module.exports = (app, db) => {

//         // -----------------------------------------------------------------------------
//         //                                     POST
//         // -----------------------------------------------------------------------------
//             app.post('/users', async (req, res) => {
//                 const { firstName, lastName, email } = req.body;
//                 const newUser = await db.User.create({
//                     firstName,
//                     lastName,
//                     email
//                 })
//                 
//                 // Send back the new user's ID in the response:
//                 res.json({
//                     id: newUser.id
//                 });
//             });
        
//     }