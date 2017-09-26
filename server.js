// var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var Router = require('react-router');
var React = require('react');


// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Database configuration with mongoose
var databaseUri = 'mongodb://localhost/nytreactapp';
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


// Routing 

// Make public a static dir
app.use(express.static("client"));

app.use(function(req, res, next) {
  var router = Router.create({location: req.url, routes: routes});
  router.run(function(Handler, state) {
    console.log(Handler);
    // var html = React.renderToString(<Handler/>);
    return res.render('react_page', {html: html});
  });
});

// API Routes
app.get('api/saved', (req, res) => { 
    // GET saved articles from database
});

app.post('/api/saved', (req, res) => { 
    // ADD/POST new article to database
})

app.delete('/api/saved', (req, res) => { 
    // DELETE saved article from database
});

app.listen(PORT, function() {
    console.log("Listening on port: ", PORT);
});