describe('verticalDancer', function() {

  var verticalDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    verticalDancer = new makeVerticalDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(verticalDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(verticalDancer.$node, 'toggle');
    verticalDancer.step();
    expect(verticalDancer.$node.toggle.called).to.be.true;
  });

  describe('vertical dance location', function() {
    it('should have location set to middle of page', function() {
      var location = $('body').width() / 2;
      expect(verticalDancer.left).to.be.equal(location);

    });
  });

});