const express = require("express");
const passport = require("passport");
require("./config/passport");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

// Port
const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();

// Configure middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routes
const photo = require('./routes/photos');
// const likes = require('./routes/likes');
const auth = require('./routes/auth');
app.use('/api/photo', passport.authenticate('jwt', {session: false}), photo);
// app.use('/api/likes', likes);
app.use('/api/auth', auth);

// Connect to the Mongo database
mongoose.connect("mongodb://localhost:27017/PicMedb", { promiseLibrary: require('bluebird'), useNewUrlParser: true })
  .then(() =>  console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

// Start the server
app.listen(PORT, function() {
  console.log("App Running on Port " + PORT + "!");
});
