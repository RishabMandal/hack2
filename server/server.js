const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const port = 5000;

app.use(express.json());
app.use(cors());



app.listen(port, () => console.log("Connected to port " + port));
