/*
 * grunt-dss2json
 * https://github.com/ubuntu/workspace
 *
 * Copyright (c) 2015 Eric Ponto
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  
  var dss = require('dss');

  grunt.registerMultiTask('dss2json', 'Runs DSS over a set of files and builds a JSON file as output.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});
    
    // support additional DSS parses
    for (var key in options.parsers) {
      dss.parser(key, options.parsers[key]);
    }

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join('\n');

      // parse the comment blocks using DSS
      dss.parse(src, {}, function(parsed) {
        // strip the first white space character that just is there after the *
        parsed.blocks.forEach(function(block) {
          block.markup.example = block.markup.example.split("\n").map(function(text) {
            return text.replace(/^\s/, '');
          }).join('\n');
        });
        
        grunt.file.write(f.dest, JSON.stringify(parsed, null, "\t"));
        grunt.log.writeln('File "' + f.dest + '" created.');
      });
    });
  });

};
