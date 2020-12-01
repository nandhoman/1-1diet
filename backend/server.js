// This API is created by Nandhom.nl. There're used a couple of package, those are listed below.
// Please read the docs to learn more about this API.

// To run this server please make your own node environment.
// run npm init
// run npm ci
// take a coffee
// run the code

const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./config/db.config.js");
const { response } = require("express");
const cors = require('cors');
// const CIDserver = require("./CIDserver1.js");
const app = express();


app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Welcome by the API build by NANDHOMAN.nl");
});

app.get('/recipes', (request, response) => {
  var CommunityID = request.query.CommunityID;
  if (CommunityID === undefined) {
    pool.query('SELECT * FROM recipes', (error, result) => {
        if (error) throw error;
 
        response.send(result);
        console.log(1)
    });
  }
  else{
    pool.query('SELECT * FROM recipes WHERE CommunityID =' + CommunityID, (error, result) => {
      console.log(2)
            if (error) throw error;
      
            response.send(result);
        });
  }
});

app.get('/keywordsintotal/:KeywordID', (req, response) => {
  var KeywordID = req.params.KeywordID;
  pool.query('SELECT * FROM keywordsintotal WHERE KeywordID =' + KeywordID, (error, result) => {
      if (error) throw error;

      response.send(result);
  });
});


app.get('/keywords', (request, response) => {
  pool.query('SELECT * FROM keywordsintotal', (error, result) => {
      if (error) throw error;

      response.send(result);
  });
}); 

app.post('/setRecipe', function (req, res) {
  var CommunityID = req.header('CommunityID')
  var PDFPath = req.header('PDFPath')
  var Populairity = req.header('Populairity')
  var Preparation = req.header('Preparation')
  var BannerImageID = req.header('BannerImageID')
  var Text = req.header('Text')
  var ReadTime = req.header('ReadTime')
  var AverageRanking = req.header('AverageRanking')
  var Likes = req.header('Likes')
  var Title = req.header('Title')
  var Step = req.header('Step')
  var Persons = req.header('Persons')
  var Ingredients = req.header('Ingredients')
  var description = req.header('description')
  var Values = "('" + CommunityID + "', '" + PDFPath + "', '" + Populairity + "', '" + Preparation + "', '" + BannerImageID + "', '" + Text + "', '" + ReadTime + "', '" + AverageRanking + "', '" + Likes + "', '" + Title + "', '" + Step + "', '" + Persons + "', '" + Ingredients + "', '" + description + "')"
  console.log(Values)
  pool.query("INSERT INTO recipes VALUES" + String(Values),  (error, result) => {
    if (error) throw error;
    else;
    // response.send(result);
});
  res.send('POST request to the homepage')
})

app.post('/setKeyword', function (req, res) {
  var Active = req.header('Active')
  var KeywordID = req.header('KeywordID')
  var Keyword = req.header('Keyword')
  var Values = "('" + KeywordID + "', '" + Keyword + "', '" + Active + "')"
  console.log(Values)
  pool.query("INSERT INTO keywordsintotal VALUES" + String(Values),  (error, result) => {
    if (error) throw error;
    else;
});
  res.send('POST request to the homepage')
})

app.get('/newCID', (req, response) => {
  var CIDserver = require("./CIDserver1.js");
  var newCID = CIDserver.CIDgenerator;
  setTimeout(() => response.json(newCID), 600);
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});