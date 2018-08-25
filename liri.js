require('dotenv').config();

var keys = require("./keys.js");

var fs = require("fs");
var Twitter = require('twitter');

var client = new Twitter(keys.twitter);
// var client = new Twitter({
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// });
var request = require('request');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


// var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
// });

var userCommand = process.argv[2];
var query = process.argv[3];


function myTweets(){
var params = {
		screen_name: 'Ermi0058',
		count: 20
	};

client.get('statuses/user_timeline', params, function(error, tweets, response){

			  if (!error) {

			    // console.log(tweets);

			    console.log(JSON.parse(response.body));
			    } else {

			  	console.log("error");

			  }

			});
}



function spotifyThisSong () {
 
 var query = process.argv.slice(3);
 var songChoice = query.join('+'); 
 
	if (!process.argv[3]) {
		songChoice = "the sign ace of base";
	}
    
	spotify.search({type: "track", query: songChoice,limit: 1}, function(error, data){
		if (error) {
			return console.log(error);
		} else {
			//printing out song information
		     console.log(data);
		for (var i = 0; i < data.tracks.items[0].album.artists.length; i++) {
			console.log("Artist(s): " + data.tracks.items[0].album.artists[i].name);
			console.log("Song: " + data.tracks.items[0].name);
			console.log("Album:" + data.tracks.items[0].album.name);
			console.log("Song Link: " + data.tracks.items[0].external_urls.spotify);
		}
   };
 
  })

}
function thisMovie(){
 var query = process.argv.slice(3);
 var movie = query.join('+');

 if (!process.argv[3]) {
	   movie = "Mr nobody";

	 } 


var url = "http://www.omdbapi.com/?t="+ movie + "&y=&plot=short&apikey=trilogy";

console.log(url);
// Then run a request to the OMDB API with the movie specified
request(url, function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
   
	console.log(JSON.parse(body));
	console.log("* Title of the movie:         " + JSON.parse(body).Title);
	console.log("* Year the movie came out:    " + JSON.parse(body).Year);
	console.log("* IMDB Rating of the movie:   " + JSON.parse(body).imdbRating);
	console.log("* Country produced:           " + JSON.parse(body).Country);
	console.log("* Language of the movie:      " + JSON.parse(body).Language);
	console.log("* Plot of the movie:          " + JSON.parse(body).Plot);
	console.log("* Actors in the movie:        " + JSON.parse(body).Actors);
   
  }
});

}


function fileRead(){
// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("random.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);

});
}


if(userCommand === "my-tweets") {
	myTweets();
}else if	(userCommand === "spotify-this-song"){
  spotifyThisSong();
}else if(userCommand === "movie-this") {
  thisMovie();
} else if(userCommand === "do-what-it-says") {
  fileRead();
}