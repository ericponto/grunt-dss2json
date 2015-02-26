# grunt-dss2json

> Runs [DSS](https://github.com/darcyclarke/dss) over a set of files and builds a JSON file as output.

Use [grunt-dss](https://github.com/darcyclarke/grunt-dss) if you want a built in templating option to build documentation. This plugin is inteneded to be used with any templating option you'd like. See [jekyll-dss](https://github.com/ericponto/jekyll-dss) for any example using Jekyll.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-dss2json --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dss2json');
```

## The "dss2json" task

### Overview
In your project's Gruntfile, add a section named `dss2json` to the data object passed into `grunt.initConfig()`.

Add JSDoc style comments to your CSS (or Sass or Less or Stylus) files to document style blocks. Then run `grunt dss2json` to generate a JSON file with all of the parsed data.

#### Example

```
/**
	* @name Test
	* @description This is a test
	* @markup
	* <div>Test</div>
*/
body { color: #c0ffee; }
```

## Settings

#### files

Type: `Array` or `Object`
Default value: `[]`

Files to parse. Using Grunt default `files` syntax. [More about that on Gruntjs wiki](https://github.com/gruntjs/grunt/wiki/Configuring-tasks#files).

### Usage Examples

```js
grunt.initConfig({
  dss2json: {
    files: {
      "path/to/output.json": ["css/**.{css,scss,less,stylus}"]
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
