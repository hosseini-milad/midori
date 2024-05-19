const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const router = express.Router()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const User = require("../models/auth/users");

router.post('/login',jsonParser,async (req,res)=>{
  //console.log(("LoginApi")
    try {
      // Get user input
      const { username, password } = req.body;
      ////console.log((phone,password)
      // Validate user input
      if (!(username && password)) {
        res.status(400).send("All input is required");
        return;
      }
      // Validate if user exist in our database
      const user = await User.findOne({username: username });
      if(user.lock==="5"){
        res.status(400).json({error:"کاربر قفل شده است"});
        return;
      }
      if(!user){
        res.status(400).send({error:"کاربر پیدا نشد"});
        return
      }
        
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, username },
          process.env.TOKEN_KEY,
          {
            expiresIn: "72h",
          }
        );
  
        // save user token
        user.token = token;
        await User.updateOne({_id:user._id},{$set:{lastLogin:Date.now(),lock:0}});
        // user
        res.status(200).json({user:user,popup:popUps});
        return;
      } 
      if (user && password===user.password){
        const token = jwt.sign(
          { user_id: user._id, username },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
        await User.updateOne({_id:user._id},{$set:{lastLogin:Date.now(),lock:0}});
        // save user token
        user.token = token;
  
        // user
        res.status(200).json({user:user});
        return;
      }

      else{
        await User.updateOne({username: username },{$set:{lock:user.lock?(parseInt(user.lock)+1):1}});
        res.status(400).send({error:"رمز عبور اشتباه است"}); 
      }
        //res.status(400).send("Invalid Credentials");
      } catch (err) {
        res.status(400).send({error:"خطایی رخ داده است"}); 
      } 
}
)
module.exports = router;
