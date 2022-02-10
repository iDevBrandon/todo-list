const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 8800;
const cors = require("cors");

dotenv.config();
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("Connected to DB...");
});

// app.use("/api/todos", todos);

app.get("/", (req, res) => {
  res.send("TODO API");
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
