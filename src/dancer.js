var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');


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

 