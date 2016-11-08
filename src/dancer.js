var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span><img class="polarBear" height="200" width = "200" src="images/cute-polar-bear.jpg"></img></span>');

};

makeDancer.prototype.step = function() { 
  var that = that || this;
  setTimeout(that.step.bind(that), that.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function() { 
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

 