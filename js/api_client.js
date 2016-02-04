function printStargazers(users) {
  $.each(users, function(index, user) {
    console.log(user.login + ' starred the Rails Repository');
  });
};

function makeStargazersApiRequest() {
  $.ajax({
    url: 'https://api.github.com/repos/rails/rails/stargazers',
    type: 'POST',
    dataType: 'jsonp'
  }).done(function(response) {
    var users = response.data;
    printStargazers(users);
  });
};

makeStargazersApiRequest();

function addHTML(html){
  $('#search_results').html(html);
};

function bindCreateButton(){
  $('#convert').click(function(event) {
    var markdown = $('#markdown').val();
    $.ajax({
      url: 'https://api.github.com/markdown',
      type: 'POST',
      data: JSON.stringify({ "text": markdown, "mode": "markdown" })
    }).done(function(response) {
      addHTML(response);
    });
  });
};

$(document).ready(function(){
  bindCreateButton();
});
