var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');



var apiKey=""; //If you're here from github and looking for API keys, nice try :)
var apiBase ="https://api.themoviedb.org/3/";
var imageBase, apiConfig;

fetch(apiBase + "configuration" +  "?api_key=" + apiKey).then(result => result.json())
.then (json => {
  imgBase = json.images.base_url;
  apiConfig = json;
});




router.get("/movie/:id", function(req, res, next){
    var id = req.params.id;

    var prom1 = fetch(apiBase + "movie/" + id + "?api_key=" + apiKey).then(result=> result.json())
  .then(json => {

    var allowedKeys = ['title', 'genres', 'tagline', 'overview', 'release_date'];
    var filtered = Object.keys(json)
      .filter(key => allowedKeys.includes(key))
      ;

      return filtered;

  }
  );

  var prom2 =     fetch(apiBase + "movie/" + id + "/credits"+"?api_key=" + apiKey ).then(result=> result.json())
      .then(json => {


        var allowedKeys = ['cast', 'crew'];
        var filtered = Object.keys(json)
          .filter(key => allowedKeys.includes(key))
          ;

          return filtered;
      })
      ;

      var prom3 =     fetch(apiBase + "movie/" + id + "/images?api_key=" + apiKey ).then(result => result.json())
    .then(json => {


    return  {currentImg: [imgBase, apiConfig.images.poster_sizes[1], json.posters[0].file_path].join('/')};

    });

    var promises = [prom1, prom2, prom3];

    Promise.all(promises).then(values => {
      return Object.assign({}, ...values);
    }).then(data => console.log(data));
});



router.get("/person/:id", function(req, res, next){
  var id = req.params.id;
  console.log(id);
  fetch(apiBase + "person/" + id + "?api_key=" + apiKey ).then(result => result.json()).then(json => res.json(json));
});





router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
});

module.exports = router;
