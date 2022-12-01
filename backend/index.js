const app = require("./app");
const connectToMongo = require("./config/db");
// const cloudinary = require("cloudinary");
const dotenv = require("dotenv");

//const Port = 5000;

//connecting to database
connectToMongo();

// Config
dotenv.config();

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//   });

//connecting to server
app.listen(process.env.PORT,()=>{
    console.log(`server is listening at ${process.env.PORT}`)
})
