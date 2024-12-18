const express = require("express"); // Import express
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const cors= require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const apiRouter = require('./routes/apiRouter');
const authRouter = require('./routes/authRoutes');

// Configuring Server
const app = express(); // Initialize an Express application
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true,}  // Allow cookies
));
app.use(bodyParser.json());
app.use("/api", apiRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to the Movie Streaming API!");
})

// Listening to the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
