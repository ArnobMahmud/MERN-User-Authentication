const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/database");
dotenv.config({ path: "./config.env" });

connectDB();

const auth = require("./routes/auth.route");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", auth);

app.get("/", (req, res) => {
  res.send("Hello Coders!");
});

// Server listening

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Your sample of MERN authentication is running at http://localhost:${PORT} in ${process.env.NODE_ENV} environment`
  )
);
