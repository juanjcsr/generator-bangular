'use strict';

var yeoman = require('yeoman-generator');

var BangularGenerator = yeoman.generators.NamedBase.extend({

  initializing: function () {
    this.dashName = this._.dasherize(this.name);
    this.camelName = this._.camelize(this.name);
  },

  writing: function () {

    var basePath = 'client/filters/' + this.dashName + '/' + this.dashName;

    this.template('filter.js', basePath + '.js');
    this.template('filter.spec.js', basePath + '.spec.js');

  }

});

module.exports = BangularGenerator;
