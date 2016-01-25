# APIS

## Objectives 
+ Explain how to make an API request using AJAX
+ Make an API `get` request using AJAX
+ Make an API `post` request using AJAX


## Intro

Now that we've made `get` requests to a website for text, let's do something more interesting with AJAX, let's use it to access an API.


## JSON

What is JSON, why it's useful, how to access data from JSON ([spotify api](http://charts.spotify.com/api/tracks/most_streamed/us/weekly/latest) has nice browser view to practice accessing data - just like nokogiri but actually accessing API and database

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

```js
 $.getJSON('URL, function(dataFromAPIRequest) {
  // code block to execute once receive data from api
});
```

## Instructions

chose an API like [wikipedia](http://www.programmableweb.com/api/wikipedia) or [tumblr](http://www.programmableweb.com/api/tumblr) (do post and get requests) have students code along with the examples - tell them what files to copy and paste

need tests to make sure following along correctly

build methods to return clean info from the API

have a frontend so students can fill out a form and submit it with the submit event and have the JS make the API call and display the information they want


## Resources



