# liri-node-app
liri
  
  This LIRI is a command line node app that takes in parameters and gives back data. this liri.js can take in one of the following four commands:
    1,`my-tweets`

    2,`spotify-this-song`

    3,`movie-this`

    4,`do-what-it-says

  ### What Each Command Does

1. `node liri.js my-tweets`

   * This shows the last 20 tweets and when they were created at in the terminal/bash window.

2. `node liri.js spotify-this-song `'<song name here>

   * This will show the following information about the song in the terminal/bash window
     
     * Artist(s)
     
     * The song's name
     
     * A preview link of the song from Spotify
     
     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.
   
   
3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced. 
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
      

4. `node liri.js do-what-it-says`
   
   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     
     * Feel free to change the text in that document to test out the feature for other commands.
