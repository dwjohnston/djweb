var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');



var apiKey = process.env.MOVIE_DB_API_KEY;
var apiBase ="https://api.themoviedb.org/3/";
var imageBase, apiConfig;

fetch(apiBase + "configuration" +  "?api_key=" + apiKey).then(result => result.json())
.then (json => {
  imgBase = json.images.base_url;
  apiConfig = json;
});

function filterByKeys(allowedKeys, json) {
  let filtered = Object.keys(json)
  .filter(key => {
    return allowedKeys.includes(key)
  }).reduce((obj, key) => {
    obj[key] = json[key];
    return obj;
  }, {});
  return filtered;
}


//Should probably tidy this stuff up in to a generic function, but you know, it's working for now.

router.get("/movie/:id", function(req, res, next){
  var id = req.params.id;

  var prom1 = fetch(apiBase + "movie/" + id + "?api_key=" + apiKey).then(result=> result.json())
  .then(json => {

    var allowedKeys = ['title', 'genres', 'tagline', 'overview', 'release_date'];
    return filterByKeys(allowedKeys, json);
  }
);

var prom2 =     fetch(apiBase + "movie/" + id + "/credits"+"?api_key=" + apiKey ).then(result=> result.json())
.then(json => {
  var allowedKeys = ['cast', 'crew'];
  return filterByKeys(allowedKeys, json);

})
;

var prom3 =     fetch(apiBase + "movie/" + id + "/images?api_key=" + apiKey ).then(result => result.json())
.then(json => {

  if (json.posters.size > 0 )
  return  {currentImg: [imgBase, apiConfig.images.poster_sizes[1], json.posters[0].file_path].join('/')};
  else return {currentImg: null};
});

var promises = [prom1, prom2, prom3];
Promise.all(promises).then(values => {

  console.log(values);
  return Object.assign(...values);
}).then(data => res.json(data));
});



router.get("/person/:id", function(req, res, next){

  var id = req.params.id;


  let prom1 = fetch(apiBase + "person/" + id + "?api_key=" + apiKey ).then(result => result.json())
  .then(json => {
    let allowedKeys = ['name', 'birthday', 'biography'];
    return filterByKeys(allowedKeys, json);

  });



  let prom2 =  fetch(apiBase + "person/" + id + "/movie_credits"+"?api_key=" + apiKey ).then(result=> result.json())
  .then(json => {
    let allowedKeys = ['cast', 'crew'];
    return filterByKeys(allowedKeys, json);
  })




  let prom3 =  fetch(apiBase + "person/" + id + "/images?api_key=" + apiKey ).then(result => result.json())
  .then(json => {

    if (json.profiles.length > 0 ){
      return {currentImg: [imgBase, apiConfig.images.profile_sizes[1], json.profiles[0].file_path].join('/')};
    }
    else{
       return {currentImg: null};
    }


  });

  let promises = [prom1, prom2, prom3];
  Promise.all(promises).then(values => {
    return Object.assign(...values);
  }).then(data => res.json(data));
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
