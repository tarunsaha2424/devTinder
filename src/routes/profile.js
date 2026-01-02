const express = require("express");
const {userAuth} = require("../middlewares/auth.js");
const profileRouter = express.Router();

profileRouter.get("/profile",userAuth,async(req,res)=>{
try{
  const user = req.user;
  // if(!user){
  //   throw new Error("User does not exist");
  // }
  res.send(user);
}catch(err){
  res.status(400).send("ERROR :"+ err.message);
}
//   const cookies = req.cookies;
//   const {token}= cookies;
//   if(!token){
//     throw new Error("Invalid Token");
//   }
//   //Validate my token
// const decodedMessage
// = await jwt.verify(token, "DEV@Tinder$790");

// // console.log(decodedMessage);
// const { _id} = decodedMessage;
// // console.log("Logged In user is :" + _id);

// const user = await User.findById(_id);
// if(!user){
//   throw new Error("User does not exist");
// }
//   // console.log(cookies);
//   res.send(user);
});

module.exports = profileRouter;