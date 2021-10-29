const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("DB Connection Successfull"))
.catch(err => console.log(err));

app.use(express.json());

// indicate any endpoint
// if you make any request take 'api/auth' endpoint route authRoute
app.use("/api/auth", authRoute);
// if you make any request take 'api/users' endpoint route usersRoute
app.use("/api/users", usersRoute)

app.use("/api/welcome", (req,res) => {
    res.send("Welcome");
})

app.listen(8080, () => {
    console.log("Backend server is running!");
})
