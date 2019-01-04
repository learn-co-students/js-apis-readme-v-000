var printStargazers = function(users) {
  $.each(users, function(index, user) {
    console.log(user.login + ' starred the Rails Repository');
  });
};

//the above function will print an array of users to the console

$.ajax({
  url:
  'https://api.github.com/repos/rails/rails/stargazers',
  type: 'GET',
}).done(function(users) {
  printStargazers(users);
});

// this code makes a request to the Github API for all the users
// that starred the Ruby on Rails repository. The callback calls printStargazers function. 

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



