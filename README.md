# APIS

## Objectives 
+ 

## Intro

So far, when you've been using an API, you've been using a gem to access the API endpoints. Basically, you're relying on work someone else did to access clean data in the desired format.

Instead of relying on a gem or library to do the heavy lifting for us, we can use Ajax to do it ourselves


## API Basics


Underneath the hood of all those gems, a request as been made to the API (to a specific url) and then the app responds to that request with JSON. 

define JSON - show an example of JSON - how to access data in JSON just like arrays and hashes

use postman chrome extension or app?? to make API request to demonstrate getting back JSON and manipulating it (screenshots) from the Github API

theoretical definition of API

## AJAX + jQuery

define ajax and why we use it - stands forAsynchronous JavaScript and XML

`$.getJSON` method - how to structure arguments  and what it returns - how it uses callbacks. makes GET request to API endpoint

GetJSON loads JSON-encoded data from the server using a GET HTTP request.
parameters: taken from[WIKI.nbasic.com](http://wiki.nsbasic.com/GetJSON)
111
url is the location that data is being requested from.

data is the information about the request. If multiple fields are being passed, include them in a single string, separated by ampersand (&) characters. It's best to do an encodeURIComponent() to the data to make sure that spaces and other special characters are properly formatted.

callback is the name of the function in your program to be called when the request is complete. Since the request may take a little while to complete, your app will continue execution immediately after the GetJSON() function is called. The results will not be available until the callback function is called. The returned data is passed to the callback function. If the JSON being loaded is invalid, callback will not be executed.
```
explain what a callback is and how it works. and implications of callbacks


use method to make same requests to github api as with postman

## Instructions

pick another easy API (twitter, foursquare, etc) and make API calls and display the data in the page

GET and POST request - to retrieve user info and then post back to the server - students will need to create accounts in order to use the APIs

## Resources



