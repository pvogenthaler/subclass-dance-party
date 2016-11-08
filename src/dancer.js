var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<div class="polarBear" ><img class="polarBear" height="200" width = "200" src="images/cute-polar-bear.jpg"></img></div>');

};

makeDancer.prototype.step = function() {
  var that = that || this;
  setTimeout(that.step.bind(that), that.timeBetweenSteps); 
//   var that = that || this;
//  // setTimeout(that.step.bind(that), that.timeBetweenSteps);
//   setTimeout(that.step.bind(that), that.timeBetweenSteps);
// another comment
//testing


};

makeDancer.prototype.setPosition = function() { 
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

 