// This function will print an array of users to the console:
var printStargazers = function(users) {
  $.each(users, function(index, user) {
    console.log(user.login + ' starred the Rails Repository');
  });
};


// This code makes a request to the GitHub API for all the users that starred the Rails repository.
// The callback calls the printStargazers function.
$.ajax({
  url: 'https://api.github.com/repos/rails/rails/stargazers',
  type: 'GET',
  }).done(function(users) {
    printStargazers(users);
});

// We are sending markdown to the GitHub API to render into HTML. Once we get a response it adds the HTML
// to <div id="search_results">
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