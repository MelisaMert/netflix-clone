const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("DB Connection Successfull"))
.catch(err => console.log(err));

app.use(express.json());

// indicate any endpoint
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8080, () => {
    console.log("Backend server is running!");
})
