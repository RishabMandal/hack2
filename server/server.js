const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://Rishab829:Kanchan%401@expresstry.wqhmyb0.mongodb.net/TodoList?retryWrites=true&w=majority"
    // "mongodb://localhost:27017"
  )
  .then(() => console.log("Connected to mongoose database"))
  .catch((err) => console.log(err));

const app = express();

const port = 5000;

//Schema
const schema = new mongoose.Schema({
  username: String,
  password: String,
});

//Model
const Model = mongoose.model("Username", schema);

// var db = mongoose.connection;
// var Log = mongoose.model("username", schema);

app.use(express.json());
app.use(cors());

// app.post("https://localhost:5000/login", async (req, res) => {
app.post("http://localhost:5000/login", async (req, res) => {
  //   const user = req.body;
  var username = req.body.username;
  var password = req.body.password;
  //   const newUser = new EventModel(user);
  //   db.collection("username").find();
  Model.find(
    { username: `${username}` },
    { password: `${password}` },
    (err, docs) => {
      if (err) {
        return console.error(err);
      }
      if (docs.length > 0) {
        console.log(docs);
        console.log("Found");
        return res.send(true);
      } else {
        console.log("Not found");
        res.send(false);
      }
    }
  );

  //   res.send(true);
});

app.post("https://localhost:5000/signup", async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
});

app.listen(port, () => console.log("Connected to port " + port));
