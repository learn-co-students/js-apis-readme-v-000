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
