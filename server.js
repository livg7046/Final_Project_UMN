const express = require("express");
const passport = require("passport");
require("./config/passport");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
mongoose.Promise = require("bluebird");

// Port
const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();

// Configure middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use(express.static("public"));
}
// app.get('*', (req, res) => res.sendFile(path.resolve('client/build', 'index.html')))
// Routes
const photo = require('./routes/photos');
// const likes = require('./routes/likes');
const auth = require('./routes/auth');
app.use('/api/photo', passport.authenticate('jwt', {session: false}), photo);
// app.use('/api/likes', likes);
app.use('/api/auth', auth);

// Connect to the Mongo database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/PicMedb";

mongoose.connect(MONGODB_URI, { promiseLibrary: require('bluebird'), useNewUrlParser: true })
  .then(() =>  console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

// Start the server
app.listen(PORT, function() {
  console.log("App Running on Port " + PORT + "!");
});
