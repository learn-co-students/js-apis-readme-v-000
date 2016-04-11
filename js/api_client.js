var baseUrl = 'https://api.github.com/repos/rails/rails/stargazers'

function printStargazers(users) {
  $.each(users, function (index, user) {
    console.log(user.login + " starred the Rails Repository");
  });
}

$.getJSON(baseUrl, function (users) {
  printStargazers(users);
});

function addHTML(html) {
  $('#search_results').html(html);
}

function bindCreateButton() {
  $('#convert').click(function (e) {
    var markdown = $('#markdown').val();
    $.ajax({
      url: 'https://api.github.com/markdown',
      type: 'POST',
      data: JSON.stringify({
        text: markdown
      })
    }).done(function (resp) {
      addHTML(resp);
    });
  });
}


// on ready func
$(document).ready(function () {
  bindCreateButton();
});
