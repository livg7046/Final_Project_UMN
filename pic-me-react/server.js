const express = require("express");

const passport = require("passport");

require("./config/passport");

const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const PORT = process.env.PORT || 3001;

// Requiring the `User` model for accessing the `users` collection
const db = require("./models");

const photo = require('./routes/photos');
const auth = require('./routes/auth');

// Initialize Express
const app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
app.use(bodyParser.json());
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost:27017/PicMedb", { promiseLibrary: require('bluebird'), useNewUrlParser: true })
  .then(() =>  console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

// Routes
// const routes = require("./routes");
// app.use(routes);
app.use('/api/photo', passport.authenticate('jwt', {session: false}), photo);
app.use('/api/auth', auth);


// Route to post our form submission to mongoDB via mongoose
// app.post("/submit", function(req, res) {
//   // Create a new user using req.body
//   User.create(req.body)
//     .then(function(dbUser) {
//       // If saved successfully, send the the new User document to the client
//       res.json(dbUser);
//     })
//     .catch(function(err) {
//       // If an error occurs, send the error to the client
//       res.json(err);
//     });
// });

// Start the server
app.listen(PORT, function() {
  console.log("App Running on Port " + PORT + "!");
});
