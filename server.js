require("dotenv").config;
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Create Middilware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, console.log("Serever listening to port 5000"));
