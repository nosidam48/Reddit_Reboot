// Dependencies
var express = require("express");
var mongoose = require("mongoose")
var logger = require("morgan");
var path = require("path");
var axios = require("axios");
var cheerio = require("cheerio");
var app = express();

// Set the app up with morgan.
// morgan is used to log our HTTP Requests. By setting morgan to 'dev'
// the :status token will be colored red for server error codes,
// yellow for client error codes, cyan for redirection codes,
// and uncolored for all other codes.
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Database configuration
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/onionArticles";

mongoose.connect(MONGODB_URI);

// Hook mongojs config to db variable
var db = require("./models");



// Routes
// ======
app.get("/all", function(req, res) {
  // Find all results from the scrapedData collection in the db
  db.Art.find({}, function(error, found) {
    // Throw any errors to the console
    if (error) {
      console.log(error);
    }
    // If there are no errors, send the data to the browser as json
    else {
      console.log(found);
      res.json(found)
    }
  });
});

// Simple index route
app.get("/", function(req, res) {
  res.render("index")
});
  
app.get("/scrape", function(req, res) {
  // Make a request via axios for the news section of `ycombinator`
  axios.get("https://www.theonion.com/").then(function(response) {
    // Load the html body from axios into cheerio
    var $ = cheerio.load(response.data);
    // For each element with a "title" class
    $(".curation-module__item").each(function(i, element) {
      // Save the text and href of each link enclosed in the current element
      var title = $(element).find("h5").find("a").text()
      var link = $(element).attr("data-permalink");
      var picture = $(element).find($("img")).attr("data-src");
      
      console.log(title + "\n" + link + "\n" + picture);

      // If this found element had both a title and a link
      if (title && link && picture) {
        // Insert the data in the scrapedData db
        db.Art.create({
          title: title,
          link: link,
          picture: picture
        },
        function(err, inserted) {
          if (err) {
            // Log the error if one is encountered during the query
            console.log(err);
          }
          else {
            // Otherwise, log the inserted data
            console.log(inserted);
          }
        });
      }
      // res.render("index", {title: title, link: link, picture: picture})
    });
    
  });
  
});
// res.render("index")
// });


app.listen(3000, function() {
  console.log("App running on port 3000!");
});
