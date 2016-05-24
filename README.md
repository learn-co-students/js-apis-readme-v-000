# APIS

## Objectives
+ Explain how to make an API request using AJAX
+ Make an API `get` request using AJAX
+ Make an API `post` request using AJAX
+ Parse JSON
+ Explain what JSON is

## Intro

Passing data back and forth from our server is easy when that data is
simple. Once we have to represent complex data it gets hard really quick.
Think about it, how would you represent a model class in a
way that both Ruby and JavaScript understand. JSON provides a simple,
light weight format that will do just that.

## JSON

Data is a core part of programming. It can be represented in many different shapes and forms. We can create arrays and hashes to store the data. This is great for data that exists only in our application but what about data outside our application? We need some sort of standard, light weight way to represent our data.

JSON stands for JavaScript Object Notation. In a nutshell, it's a way to represent data in a format that closely resembles JavaScript objects. It's very light weight and easy to read. This is great because not only will it save bandwidth, we can read it with a plain old text editor. On top of all this, JavaScript can parse this format with one super easy line of code, `JSON.parse`.

What does JSON even look like? Let's take a look.

```javascript
{
  "artist_name": "Hozier",
  "track_name" : "Take Me to Church",
  "album_name" : "Take Me to Church EP"
}
```
Similar to how JavaScript objects are defined with `{}`, the same goes for JSON. Inside of the `{}` we have our key/value pairs. The artist name for this chunk of data is **Hozier** and the track name is **Take me to church**. We might even guess this represents a song. Let's put JSON to work with our Ajax requests.

## Getting JSON With Ajax
If we already know that the API we are using responds with JSON, we can use the jQuery function `$.getJSON`. This function performs an Ajax request and parses the response as JSON automatically. This means the callback receives a JavaScript object with the contents of the response data ready for us to use.

This next example shows an Ajax request to the Spotify API for information about a specific song.

```javascript
var url = 'https://api.spotify.com/v1/tracks/1zHlj4dQ8ZAtrayhuDDmkY';
var success_callback = function (songFromAPIRequest){
  // The response has already been parsed for us.
  alert("Song Name: " + songFromAPIRequest.name);
};

$.getJSON(url, success_callback);
```
We made a request to the API url and in our callback we created an alert dialog with the name of the song we got back. jQuery handled the request plus the parsing of the result so all we need to do is to figure out what to do with the data.

## Changing Our Request With Parameters
At some point, we will need to alter our request in order to change the data we receive. How we do this depends on the API we are calling but there is a good chance we will need to use url parameters. jQuery provides an easy way to do this by passing our parameters as a JavaScript object. Let's use the Spotify API to search for a song. We will specify 3 different criteria, `q` will be the search string, `type` will be the type of the thing we want to find and `limit` will be how many results we want.

```javascript
var url = 'https://api.spotify.com/v1/search';

// These parameters will be made into url parameters by jQuery
var url_params = {
  q: "Take Me to Church",
  type: "track",
  limit: 10
};

var success_callback = function (searchResultsFromAPIRequest){
  var tracks = searchResultsFromAPIRequest.tracks.items;
  $.each(tracks, function(index, track) {
    console.log("Song Found: " + track.name);
  });
};

// The second parameter we are passing is the url parameters to use in the request
$.getJSON(url, url_params, success_callback);
```
The result of the request will be the name of all the songs we found printed to the console. Under the covers, jQuery took our parameters and constructed a url to make the request with.

```
https://api.spotify.com/v1/search?qTake+Me+to+Church&type=track&limit10
```

Its also possible to create the url ourselves.

```javascript
// Here we manually create a url with all the url parameters
var url = 'https://api.spotify.com/v1/search?q=Take+Me+to+Church&type=track&limit=10';

var success_callback = function (searchResultsFromAPIRequest){
  var tracks = searchResultsFromAPIRequest.tracks.items;
  $.each(tracks, function(index, track) {
    console.log("Song Found: " + track.name);
  });
};

// No url parameters being passed since we already included them in the url
$.getJSON(url, success_callback);
```
In the end, we get the same results but we have the option to choose our approach based on the situation. One final thing to consider is that our success callback won't actually be called if the JSON that gets return from the API is invalid. We will need to have a error callback to handle these types of problems.

## Instructions
Let's write some code together to show how this all works. We will be
creating a simple markdown parser using the GitHub API.

Copy the following code into `js/api_client.js`.
```javascript
var printStargazers = function(users) {
  $.each(users, function(index, user) {
    console.log(user.login + ' starred the Rails Repository');
  });
};
```

This function will print an array of users to the console. Next, copy the following code into `js/api_client.js`.

```javascript
  $.ajax({
    url: 'https://api.github.com/repos/rails/rails/stargazers',
    type: 'GET',
  }).done(function(users) {
    printStargazers(users);
  });
```
This code makes a request to the GitHub API for all the users that starred the Ruby on Rails repository. The callback calls the `printStargazers` function. Let's try out our code so far. In your terminal run `python -m SimpleHTTPServer`. Browse to http://localhost:8000 and open Chrome developer tools. You should see a number of logs like this `dhh starred the Rails Repository`.

Now let's try a POST request. Copy the following code into `js/api_client.js`.

```javascript
  var addHTML = function (html){
    $('#search_results').html(html);
  };

  var bindCreateButton = function (){
    $('#convert').click(function(event) {
      var markdown = $('#markdown').val();
      $.ajax({
        url: 'https://api.github.com/markdown',
        type: 'POST',
        data: JSON.stringify({ text: markdown, mode: "markdown" })
      }).done(function(response) {
        addHTML(response);
      });
    });
  };

  $(document).ready(function(){
    bindCreateButton();
  });
```
Here we are sending markdown to the GitHub API to render into HTML. Once we get a response it adds the HTML to `<div id="search_results">`.

## Resources

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-apis-readme' title='APIS'>APIS</a> on Learn.co and start learning to code for free.</p>

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-apis-readme'>APIs and JSON </a> on Learn.co and start learning to code for free.</p>
