describe('middleDancer', function() {

  var middleDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    middleDancer = new makeMiddleDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(middleDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(middleDancer.$node, 'toggle');
    middleDancer.step();
    expect(middleDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(middleDancer, 'step');
      expect(middleDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(middleDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(middleDancer.step.callCount).to.be.equal(2);
    });
  });

});