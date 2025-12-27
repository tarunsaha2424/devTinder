const mongoose = require('mongoose');

const connectDB = async ()=>{ await mongoose.connect("mongodb+srv://tarunsaha5827:123abcABC@cluster0.7yni48g.mongodb.net/devTinder");}; 

module.exports = connectDB;

