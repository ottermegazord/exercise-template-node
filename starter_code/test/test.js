var should = require('chai').should();
var ex = require('../solution.js');

describe('Call 1st Function', function() {
	it('Match Response Message', function() {
	    ex.first().should.equal('Success: 1st function works!');
	});
});

describe('Call 2nd Function', function() {
	it('Match Response Message', function() {
	    ex.second().should.equal('Success: 2nd function works!');
	});
});

describe('Call 3rd Function', function() {
	it('Match Response Message', function() {
	    ex.third().should.equal('Success: 3rd function works!');
	});
});

