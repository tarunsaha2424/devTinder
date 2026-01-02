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
- User.findOne with duplicate email ids , which object will be returned
- API - Get user by email
- API - Feed API - GET/feed - get all the users from the database
- API - Get user by ID
- Create a delete user API
- Difference between PATCH and PUT
- API - Update a user
- Explore the mongoose Documentation for Model method
- What are options in a Model.findOneAndUpdate method, explore more about it 
- API - Update the user with emailId


- Explore schematype options from the documentation
- add required, unique, lowercase, min, minLength, trim
- Add default
- Create a custom validate function for gender
- Improve the DB schema - Put all appropriate validations on each field in schema
- Add timestamps to the userSchema
- Add API level validation on Patch request & Signup post API
- DATA Sanitizing - Add API validation for each field
- Install validator
- Explore validator library functions and Use validator function for password, email and photoURL
- NEVER TRUST req.body


- Validate data in Signup API
- Install bcrypt package
- Create PasswordHash using bcrypt.hash & save the user with encrypted password
- Create login API
- Compare passwords and throw errors if email or password is invalid 

-install cookie-parse
- just send a dummy cookie to user
- create GET /profile API and check if you get the cookie back
- install jsonwebtoken
- IN login API, after email and password validation,create a JWT token and send it to user in cookies
- read the cookies inside your profile API and find the logged in user
- userAuth Middleware
- Add the userAuth middleware in profile API and a new sendConnectionRequest API
- Set the expiry of JWT token and cookies to 7 days
- Create userSchema method to getJWT()
- Create UserSchema method to comparepassword(passwordInputByUser)

- Explore tinder APIs
- Create a list of all API you can think of in Dev Tinder
- Group multiple routes under respective routers  
- Read documentation for express.Router
- Create routes folder for managing auth, profile, request routers
- Create autRouter , profileRouter, requestRouter
- Import these routers in app.js
- Create POST /logout API
- Create PATCH /profile/edit
- Create PATCH /profile/password API => forgot password API
- Make sure you validate all data in every POST, PATCH apis

