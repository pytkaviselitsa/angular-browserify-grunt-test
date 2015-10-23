'use strict';

module.exports = angular.module('common.services', [])
    .factory('deferFactory', require('./deferService.js'))
    .factory('moduleFactory', require('./moduleFactory.js'));