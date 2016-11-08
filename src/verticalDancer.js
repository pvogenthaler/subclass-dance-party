var makeVerticalDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.left = $('body').width() / 2;
  this.$node = $('<div align="right"><img class="puppy" height="200" width = "200" src="images/JG.jpg"></img></div>');

};

makeVerticalDancer.prototype = Object.create(makeDancer.prototype);

makeVerticalDancer.prototype.constructor = makeVerticalDancer;

makeVerticalDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};