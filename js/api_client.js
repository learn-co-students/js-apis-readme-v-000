function printStargazers (users) {
  $.each(users, function(index, user){
    console.log(user.login + " starred the Rails Repository");
  });

}

function bindCreateButton(){
  $("#convert").on("click", function(){
    var markdown = $("#markdown").val();

    $.ajax({
      url: "https://api.github.com/markdown",
      type: "POST",
      data: JSON.stringify({text: markdown, mode: "markdown"})
    }).done(function(response){
      addHTML(response);
    });
  });

}

function addHTML (html) {
  $("search_results").html(html);
}

$(document).ready(function(){

  $.ajax({
    url: "https://api.github.com/repos/rails/rails/stargazers",
    type: "GET",

  }).done(function(users){
    printStargazers(users)

  }).fail(function(error) {
    console.log("Something went wrong: " + error);
  });

  bindCreateButton();


});