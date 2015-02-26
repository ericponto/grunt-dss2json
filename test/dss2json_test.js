'use strict';

var grunt = require('grunt');

exports.dss2json = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  test: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/output.json');
    var expected = grunt.file.read('test/expected/output.json');
    test.equal(actual, expected, 'Outputted JSON matches');

    test.done();
  }
};
