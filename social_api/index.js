const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users") ;
const userAuth = require("./routes/auth") ;
const postAuth = require("./routes/post") ;


dotenv.config();

// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// },).then((res) => {
//     console.log("Database connected");
//   }).catch(error => {
//     console.log("MongoDB connection error:", error);

//    });
mongoose.connect(process.env.MONGO_URL);
console.log(process.env.MONGO_URL);
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", userAuth);
app.use("/api/post", postAuth);

app.listen(8800,()=>{
    console.log("Backend server ready");
})