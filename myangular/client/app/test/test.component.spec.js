'use strict';

describe('Component: test', function () {

  // load the component's module
  beforeEach(module('myangularApp'));

  var testComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function ($componentController) {
    testComponent = $componentController('test', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
