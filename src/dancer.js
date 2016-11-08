var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<img class="polarBear" height="50" width = "50" src="images/cute-polar-bear.jpg"></img><br>');

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

 