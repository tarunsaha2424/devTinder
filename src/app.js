const express = require("express");

const connectDB = require("./config/database");

const app = express();
const {userAuth} = require("./middlewares/auth.js");
const User = require("./models/user");
const user = require("./models/user");
const {validateSignUpData} = require("./utils/validation")
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
 const authRouter = require("./routes/auth");
 const profileRouter = require("./routes/profile");
 const requestRouter = require("./routes/requests");



app.use(express.json());
app.use(cookieParser());

// app.post("/signup",async(req, res)=>{
//   // console.log(req.body);
// try{
//   // Validation of data
//   validateSignUpData(req);
//   const {firstName, lastName, emailId, password} = req.body;


//   // Encrypt the password
// const passwordHash = await bcrypt.hash(password,10); 
// console.log(passwordHash);


//   // Creating a new instance of the User model
//   const user = new User(
//    {
//     firstName,
//     lastName,
//     emailId,
//     password: passwordHash
//    }
//   );

//   // const user = new User({
//   //   firstName :"Virat",
//   //   lastName :  "Kohli",
//   //    emailId: "virat@kohli.com",
//   //    password :"virat@123"
//   // });

  
//  await user.save();
//   res.send("User Added successfully!!");
//   }catch(err){
//     res.status(400).send("ERROR :"+ err.message);
//   }
 
//   // creating a new instance of the User model 
//   // const user = new  User(userObj);




// });

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);




// app.post("/login", async(req,res)=>{
//   try{
//     const {emailId, password}= req.body;

//     const user = await User.findOne({emailId: emailId});
//     if(!user){
//       throw new Error("Invalid credentials");
//     }

//     // const isPasswordValid = await bcrypt.compare(password,user.password);
// const isPasswordValid = await user.validatePassword( password);
//     if(isPasswordValid){

//       // Create a JWT Token
     
//       // console.log(token);
//       // Add the token to cookie and send the response to the user

//       const token = await user.getJWT();

//       res.cookie("token",token,{expires: new Data(Date.now()+ 8*3600000),

//       });


 

//       res.send("Login Successful!!");
//     }
//     else{
//       throw new Error("Password is not correct");
//     }

//   }catch(err){
//     res.status(400).send("ERROR : "+ err.message);
//   }
// });


app.get("/profile",userAuth,async(req,res)=>{
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


//Get user by email
app.get("/user",async(req,res)=>{
  const userEmail = req.body.emailId;
  try{
   
   const user = await User.findOne({emailId : userEmail});

   if(!user){
    res.status(404).send("User not found");
   }else{
 res.send(user);
   }
  
   
   
    // const users = await User.find({ emailId: userEmail});

    // if(users.length === 0){
    //   res.status(404).send("User not found");

    // }else{
    //   res.send(users);
    // }

    // res.send(user);
  }catch(err){
    res.status(400).send("Something went wrong");
  }
   
});


// Feed API - GET /feed - get all the users from the database
app.get("/feed", (req,res)=>{

})



// Delete a user from the database
app.delete("/user", async (req, res)=> {
  const userId = req.body.userId;
try {
 const user = await User.findByIdAndDelete(userId); 
 res.send("User deleted successfully");
} catch (err) {
  res.status(400).send("Something went wrong");
}

})


// Update data of the user
app.patch("/user",async (req,res)=>{
  const userId = req.params?.userId;
  const data = req.body;

  

  try{

    const ALLOWED_UPDATES = [
    "userId","photoUrl","about","gender","age","skills"
  ]

  const isUpdateAllowed = Object.keys(data).every((k)=> ALLOWED_UPDATES.includes(k));

  if(!isUpdateAllowed){
    throw new Error("Update not allowed");
  }
  if(data?.skills.length >10){
    throw new Error("Skills cannot be more than 10");
  }
const user = await User.findByIdAndUpdate({_id: userId}, data,{
  returnDocument:"after",
  runValidators : true
});
console.log(user);
res.send("User updated successfully");
  }catch(err){
    res.status(400).send("UPDATE FAILED:"+ err.message);
  }
})

app.post("/sendConnectionRequest",userAuth, async(req,res)=>{
// Sending a connection request
console.log("Sending a connection request");

// res.send("Connection Request Sent!!")

res.send(user.firstName + " send the connect request!");
})


connectDB().then(
  ()=>{
    console.log("Database connection established...");
    app.listen(7777,()=>{
  console.log("Server is successfuly listening on port 7777...");
});
  }
).catch(err =>{
   console.error("Database cannot be connected!! ");
});


// const {adminAuth, userAuth} = require("./middlewares/auth");


// app.use("/admin", adminAuth);


// app.post("user/login", ()=> {
//   res.send("User logged in successfully!");
// });

// app.use("/admin", (req,res,next)=>{
//   const token = "xyzalksdkd";
//   const isAdminAuthorized =token === "xyz";
//   if (!isAdminAuthorized){
//     res.status(401).send("Unauthorized request");
//   }
//   else{
//     next();
//   }
// })


// app.get("/user",userAuth,(req,res)=>{
//   res.send("User Data Sent");
// })

// app.get("/getUserData",(req,res)=>{
// try{  throw new Error("akdlf");
//   res.send("User Data Sent");

// }catch{
//   res.status(500).send("Some error "); 
// }
  // Logic of DB call and get user data


// })


// app.use("/",(err, req, res, next)=>{
// if(err){
//   res.status(500).send("something went wrong");
// }

//  });
// app.use("/user",(req,res)=>{
//   res.send("Hahaha");

// });
// app.get("/admin/getAllData",(req, res)=>{

//   res.send("All Data Sent");
//   // Check if the request is authorized
//   // const token = "xyzasf";
//   // const isAdminAuthorized = token === "xyz";
//   // if(isAdminAuthorized){
//   //   res.send("All Data Sent");

//   // }else{
//   //   res.status(401).send("Unauthorized request");
//   // }

//   // res.send("All Data Sent");  
// });


// app.get("/admin/deleteUser",(req, res)=>{
//   // Logic of fetching all data

//   res.send("Deleted a User");  
// })

// This will only handle GET call to /user
// app.get("/ab*cd", (req,res)=>{
//   res.send({firstName:"Akshay", lastName:"Saini"});
// });


// app.get("/user", (req,res)=>{
  
//   console.log(req.query);
//   res.send({firstName:"Akshay", lastName:"Saini"});
// });

// app.use("/route", rh,[rh2, rh3], rh4,rh5 );


// app.use("/user",(req,res, next)=>{
//   //Route Handler
//   //  res.send("Route Handler 1");
//   console.log("Handling the route user!!" );
//   next();
//   // res.send("Route Handler 1");  
// }
// // (req, res, next)=>{
// //   console.log("Handling the route user 2!! ");
// //   // res.send("2nd Response!!");
// //   next();
// // }],
// // (req, res,next)=>{
// //   console.log("Handling the route user 3!! ");
// //   // res.send("3rd Response!!");
// // next();
// // },
// // (req, res, next )=>{
// //   console.log("Handling the route user 4!! ");
// //   // res.send("4th Response!!");
// //   next();
// // },
// // (req, res, next )=>{
// //   console.log("Handling the route user 5!! ");
// //   res.send("5th Response!!");
// //   // next();
// // }
// );

// app.get("/user",(req,res, next)=>{
//   //Route Handler
//   //  res.send("Route Handler 1");
//   // console.log("Handling the route user!!" );
//   next();
//   // res.send("Route Handler 1");  
// },
// (req,res,next)=>{
//   next();
// },
// (req,res,next)=>{
//   next();
// },(req,res, next)=>{
//   res.send("2nd Route Handler");
// }); 


// app.post("/user", (req,res)=>{
//   // console.log("Save Data to the database");
//   // Save data
//   res.send("Data successfully saved to the database");
// }); 



// app.delete("/user", (req, res)=>{
//   res.send("Deleted successfully!");
// });

// this will match all the HTTP methods API calls to /test
// app.use("/test",(req,res)=>{
//   res.send("Hello from the server!");
// }
// )

// app.use("/hello",(req,res)=>{
//   res.send("Hello hello hello");
// }
// )

// app.use("/",(req,res)=>{
//   res.send("Namaste from the dashboard! ");
// }
// )



//  console.log("Starting a new project!");
