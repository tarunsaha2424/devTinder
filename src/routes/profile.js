const express = require("express");
const {userAuth} = require("../middlewares/auth.js");
const profileRouter = express.Router();
const {validateEditProfileData}=require("../utils/validation");

profileRouter.get("/profile/view",userAuth,async(req,res)=>{
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

profileRouter.patch("/profile/edit",userAuth, async(req, res)=>{

try{
if(!validateEditProfileData(req)){
  throw new Error("Invalid Edit Request");
  // return res.status(400).send("")
};
const loggedInUser = req.user;
// loggedInUser.firstName = req.body.firstName;

console.log(loggedInUser);

Object.keys(req.body).forEach((key)=> {loggedInUser[key]= req.body[key]});



console.log(loggedInUser);

res.send(`${loggedInUser.firstName}, your profile updated successfully`);
}catch(err){
  res.status(400).send("ERROR : "+ err.message);
}
});


module.exports = profileRouter;