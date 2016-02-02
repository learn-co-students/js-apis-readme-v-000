describe('JS APIs', function() {
  var user = { login: 'test' };
  var users = [user];

  it('prints star gazers to console', function() {
    spyOn(console, "log");

    printStargazers(users);
    expect(console.log).toHaveBeenCalledWith(user.login + ' starred the Rails Repository');
  });

  it('calls stargazers GitHub API ', function() {
    spyOn($, "ajax").and.callFake(function(options) {
      options.success({ data: users });
    });

    setTimeout(function(){
      expect(console.log).toHaveBeenCalledWith(user.login + ' starred the Rails Repository');
    }, 1000);
  });

  it('renders markdown using GitHub API ', function() {
    var html = "<p class='test_class'>blah</p>";
    setFixtures('<body><input id="create" value="create"/><div id="search_results"></body>');

    spyOn($, "ajax").and.callFake(function(options) {
      options.success(html);
    });

    bindCreateButton();

    $('#convert').click();

    setTimeout(function(){
      expect($('#search_results').html).toEqual(user.login + ' starred the Rails Repository');
    }, 1000);
  });

});

