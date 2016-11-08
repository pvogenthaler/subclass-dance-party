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

  describe('test middle dancer', function() {
    it('should have a location set properly', function() {
      var height = $("body").height() / 2;
      expect(middleDancer.top).to.be.equal(height);

    });
  });

});