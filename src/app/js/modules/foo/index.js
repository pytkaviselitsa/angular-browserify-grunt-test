'use strict';
// Home View
module.exports = angular.module('modules.foo', [])
	.factory('fooService', require('./fooService.js'))
    .controller('FooCtrl', require('./foo.js'));