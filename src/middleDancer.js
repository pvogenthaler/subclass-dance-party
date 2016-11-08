var makeMiddleDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = 500;
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