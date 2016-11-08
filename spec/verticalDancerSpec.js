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

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(verticalDancer, 'step');
      expect(verticalDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(verticalDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(verticalDancer.step.callCount).to.be.equal(2);
    });
  });

});