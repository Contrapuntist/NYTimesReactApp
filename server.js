const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const routes = require('./routes');


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} 

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.use(routes);

// mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
// // mongoose.connect(
// //   process.env.MONGODB_URI || "mongodb://localhost/nytreactdb",
// //   {
// //     useMongoClient: true
// //   }
// // );

// Database configuration with mongoose
mongoose.Promise = global.Promise;

var databaseUri = 'mongodb://localhost/nytreactdb';
if (process.env.MONGODB_URI) { 
  var promise = mongoose.connect(process.env.MONGODB_URI)
} else {
  var promise = mongoose.connect(databaseUri, {
    useMongoClient: true,
    /* other options */
  });
}
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});



app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
