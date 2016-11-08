var makeMiddleDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.left = 500;
  this.top = 5000;
  this.$node = $('<div align="center"><img class="puppy" height="200" width = "250" src="images/impossibly-cute-puppy-15.jpg"></img></div>');

};

makeMiddleDancer.prototype = Object.create(makeDancer.prototype);

makeMiddleDancer.prototype.constructor = makeMiddleDancer;

makeMiddleDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

makeMiddleDancer.prototype.setPosition = function() { 
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};