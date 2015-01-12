var fs = require('fs');
var assert = require('assert');
var rework = require('rework');
var reworkOnlyChild = require('..');

describe('rework-only-child', function() {

  it('correctly convert :only-child to :first-child:last-child', function() {
    var output = rework(fixture('only-child.css')).use(reworkOnlyChild()).toString().trim();
    var expected = fixture('only-child.expected.css');

    assert.equal(output, expected);
  });
});

function fixture(name) {
  return fs.readFileSync('test/fixtures/' + name, 'utf8').trim();
}
