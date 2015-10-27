'use strict';

module.exports = angular.module('common.services', [])
    .factory('deferFactory', require('./deferService.js'))
    .provider('helloWorld', require('./moduleProvider.js'))
    .factory('helloWorldFactory', require('./moduleProvider.js'));