'use strict';
// Home View
module.exports = angular.module('modules.foo', [])
    .controller('FooCtrl', require('./foo.js'))
	.factory('fooService', require('./fooService.js'))