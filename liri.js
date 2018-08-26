require('dotenv').config();

var keys = require("./keys.js");

var fs = require("fs");
var Twitter = require('twitter');

var client = new Twitter(keys.twitter);
var request = require('request');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

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
   
	// console.log(JSON.parse(body));
	console.log("* Title of the movie:         " + JSON.parse(body).Title);
	console.log("* Year the movie came out:    " + JSON.parse(body).Year);
	console.log("* IMDB Rating of the movie:   " + JSON.parse(body).imdbRating);
	console.log("* Country produced:           " + JSON.parse(body).Country);
	console.log("* Language of the movie:      " + JSON.parse(body).Language);
	console.log("* Plot of the movie:          " + JSON.parse(body).Plot);
	console.log("* Actors in the movie:        " + JSON.parse(body).Actors);
   
     for(var i = 0; i < JSON.parse(body).Ratings.length; i++) {
	    	if(JSON.parse(body).Ratings[i].Source === "Rotten Tomatoes") {
	    		console.log("* Rotten Tomatoes Rating:     " + JSON.parse(body).Ratings[i].Value);
	    		 }
	    		}
	    	}
	    });
   };


if(userCommand === "my-tweets") {
	myTweets();
}else if	(userCommand === "spotify-this-song"){
  spotifyThisSong();
}else if(userCommand === "movie-this") {
  thisMovie();
} else if(userCommand === "do-what-it-says") {
	

	fs.readFile("random.txt", "utf-8", function(error, data) {
		var userCommand;
		var query;
  // console.log(data);
		
		if(data.indexOf(",") !==-1) {
			var dataArr = data.split(",");
			userCommand = dataArr[0];
			query = dataArr[1];
			var songChoice = query; 				
		} else {
			userCommand = data;
		}
		// After reading the command from the file, then directs which app function to run
		if(userCommand === "my-tweets") {
			myTweets();
		} else if(userCommand === "spotify-this-song") {
			spotifyThisSong();
		} else if(userCommand === "movie-this") {
			thisMovie();
		} else { 
			console.log("command from file is not a valid command! Please try again.")
		}
	});
} else if(userCommand === undefined) {
	console.log("Please enter a command.")
} else { 
	console.log(" your command is not recognized! Please try again.")
}