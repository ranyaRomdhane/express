const express = require('express');
const users= require("./userlist")
const userRouter = express.Router();


//get user
userRouter.get('/', (req, res) => {
const date = new Date();
const hours = date.getHours();
if (hours > 8 && hours < 18) {
    res.render("opened"); 
}  else {
        res.render("closed");
    }

  });
//post user
userRouter.post('/login', (req, res) =>{
let email=req.body.email;
let passwords=req.body.passwords;
res.send({msg: `your email is ${email} and your passwords is ${passwords} `});
}) 


 //delete user  


 //update user

module.exports = userRouter;