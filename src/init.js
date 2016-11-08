$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    if (dancerMakerFunctionName === "lineUp") {
      window.dancers.forEach(function(item) {

        var dancer = item[0];
        dancer["align"] = "right";
      });
    } else {
      var dancerMakerFunction = window[dancerMakerFunctionName];
      console.log(dancerMakerFunction);
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 10000
      );
      dancer.setPosition();
      dancer.step();
      $('body').append(dancer.$node);
      window.dancers.push(dancer.$node);
    }
  });

  $('div').on('hover', function(event) {
    console.log($(this));
    alert("hovering");
  });

  // $('.middleDancerButton').on('click', function(event) {
  //   var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
  //   //console.log($this);
  //   var dancerMakerFunction = window[dancerMakerFunctionName];
  //   var dancer = new makeMiddleDancer(
  //     $("body").height() * 20,
  //     $("body").width() * 1000,
  //     Math.random() * 10000
  //   );
  //   dancer.setPosition();
  //   dancer.step();
  //   $('body').append(dancer.$node);
  // });


  // $('.makeVerticalDancer').on('click', function(event) {
  //   var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
  //   //console.log($this);
  //   var dancerMakerFunction = window[dancerMakerFunctionName];
  //   var dancer = new makeVerticalDancer (
  //     $("body").height() * 1000,
  //     $("body").width() * 10000,
  //     Math.random() * 10000
  //   );
  //   dancer.setPosition();
  //   dancer.step();
  //   $('body').append(dancer.$node);
  // });
});




