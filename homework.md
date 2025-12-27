- Create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install express 
- Create a server
- Listen to port 7777
- write request handlers for /test,/hello
- Install nodemon and update scripts inside package.json
- what is the use of "-g" while npm install
- difference between caret and tilde(^ vs ~)

- initialize git
- gitignore
- Create a remote repo on github
- push all code to remote origin
- play with route extensions ex. /hello, /, hello/2, /xyz
- order of the routes matter a lot 
 - install postman app and make a workspace/collection > test API call
 - Write logic to handle GET, POST, PATCH , DELETE API Calls and test them on postman
 - Explore routing and use of ?,+,(),* in the routes
 - Use of regex in routes /a/, /.*fly$/
 - Reading the query params in the routes 
 - Reading the dynamic routes


 - Multiple ROute Handlers - play with the code
 - next()
 - next function and errors along with res.send()
 - app.use("/route", rh,[rh2, rh3], rh4, rh5);
 - What is a Middleware? Why do we need it? 
 - How express JS basically handles requests behind the scenes
 - Difference between app.use and app.all
 - Write a dummy auth middleware for admin
 - Write a dummy auth middleware for all user routes, except /user /login
 - Error Handling using app.use("/",(err,req,res,next)= {});


- create a free cluster on mongoDB official website(MongoDB Atlas)
- install mongoose library
- Connect your application to the Database "Connection-url"/devTinder
- Call the connectDB function and connect to database before starting application on 7777
- Create a userSchema & user Model
- Create POST /signup API to add data to database
- Push some documents using API calls from postman


- JS object vs JSON (difference)
- Add the express.json middleware to your app
- Make your signup API dynamic to receive data from the end user