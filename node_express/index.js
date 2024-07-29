const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./Router/userRouter");

const app = express();
const port = 3000;

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3001", // Your frontend URL
  credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use("/users", userRoutes);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
