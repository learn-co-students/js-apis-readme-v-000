let printStargazers = function(users) {
  $.each(users, function(index, user) {
    console.log(user.login + ' starred the Rails Repository');
  });
};

$.ajax({
  url: 'https://api.github.com/repos/rails/rails/stargazers',
  type: 'GET',
  }).done(function(users) {
  printStargazers(users);
});


let addHTML = function (html){
    $('#search_results').html(html);
  };

  let bindCreateButton = function (){
    $('#convert').click(function(event) {
      let markdown = $('#markdown').val();
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
