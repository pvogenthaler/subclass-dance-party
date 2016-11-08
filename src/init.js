$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    dancer.setPosition();
    dancer.step();
    $('body').append(dancer.$node);
  });

  $('.middleDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    //console.log($this);
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new makeMiddleDancer(
      $("body").height() * 2000,
      $("body").width() * 1000,
      Math.random() * 1000
    );
    dancer.setPosition();
    dancer.step();
    $('body').append(dancer.$node);
  });


  $('.makeVerticalDancer').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    //console.log($this);
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new makeVerticalDancer (
      $("body").height() * 1000,
      $("body").width() * 10000,
      Math.random() * 1000
    );
    dancer.setPosition();
    dancer.step();
    $('body').append(dancer.$node);
  });
});




