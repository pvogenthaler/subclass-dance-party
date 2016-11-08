var makeVerticalDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.left = 500;
};

makeVerticalDancer.prototype = Object.create(makeDancer.prototype);

makeVerticalDancer.prototype.constructor = makeVerticalDancer;

makeVerticalDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

makeVerticalDancer.prototype.setPosition = function() { 
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};