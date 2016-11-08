var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
};

makeDancer.prototype.step = function() { 
  setTimeout(function() {
    this.step(); 
  }, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  console.log(top, left);
 
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  makeDancer.$node.css(styleSettings);
};

 