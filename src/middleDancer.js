var makeMiddleDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeMiddleDancer.prototype = Object.create(makeDancer.prototype);

makeMiddleDancer.prototype.constructor = makeMiddleDancer;

makeMiddleDancer.prototype.step = function () {
  this.top = 300;
  this.left = 300;
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};