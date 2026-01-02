const express = require("express");
const authRouter = express.Router();
const {validateSignUpData} = require("../utils/validation")
const User = require("../models/user");
const bcrypt = require("bcrypt");




authRouter.post("/signup",async(req, res)=>{
  // console.log(req.body);
try{
  // Validation of data
  validateSignUpData(req);
  const {firstName, lastName, emailId, password} = req.body;


  // Encrypt the password
const passwordHash = await bcrypt.hash(password,10); 
console.log(passwordHash);


  // Creating a new instance of the User model
  const user = new User(
   {
    firstName,
    lastName,
    emailId,
    password: passwordHash
   }
  );

  // const user = new User({
  //   firstName :"Virat",
  //   lastName :  "Kohli",
  //    emailId: "virat@kohli.com",
  //    password :"virat@123"
  // });

  
 await user.save();
  res.send("User Added successfully!!");
  }catch(err){
    res.status(400).send("ERROR :"+ err.message);
  }
 
  // creating a new instance of the User model 
  // const user = new  User(userObj);




});
 
authRouter.post("/login", async(req,res)=>{
  try{
    const {emailId, password}= req.body;

    const user = await User.findOne({emailId: emailId});
    if(!user){
      throw new Error("Invalid credentials");
    }

    // const isPasswordValid = await bcrypt.compare(password,user.password);
const isPasswordValid = await user.validatePassword( password);
    if(isPasswordValid){

      // Create a JWT Token
     
      // console.log(token);
      // Add the token to cookie and send the response to the user

      const token = await user.getJWT();

      res.cookie("token",token,{expires: new Data(Date.now()+ 8*3600000),

      });


 

      res.send("Login Successful!!");
    }
    else{
      throw new Error("Password is not correct");
    }

  }catch(err){
    res.status(400).send("ERROR : "+ err.message);
  }
});


module.exports = authRouter;