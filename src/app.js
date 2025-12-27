const express = require("express");
const app = express();


// app.use("/user",(req,res)=>{
//   res.send("Hahaha");

// });


// This will only handle GET call to /user
// app.get("/ab*cd", (req,res)=>{
//   res.send({firstName:"Akshay", lastName:"Saini"});
// });


// app.get("/user", (req,res)=>{
  
//   console.log(req.query);
//   res.send({firstName:"Akshay", lastName:"Saini"});
// });

// app.use("/route", rh,[rh2, rh3], rh4,rh5 );


app.use("/user",[(req,res, next)=>{
  //Route Handler
  //  res.send("Route Handler 1");
  console.log("Handling the route user!!" );
  next();
  // res.send("Route Handler 1");  
},
(req, res, next)=>{
  console.log("Handling the route user 2!! ");
  // res.send("2nd Response!!");
  next();
}],
(req, res,next)=>{
  console.log("Handling the route user 3!! ");
  // res.send("3rd Response!!");
next();
},
(req, res, next )=>{
  console.log("Handling the route user 4!! ");
  // res.send("4th Response!!");
  next();
},
(req, res, next )=>{
  console.log("Handling the route user 5!! ");
  res.send("5th Response!!");
  // next();
}
);
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

app.listen(7777,()=>{
  console.log("Server is successfuly listening on port 7777...");
});

//  console.log("Starting a new project!");
