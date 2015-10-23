'use strict';

module.exports = angular.module('modules', [
        require('./bar').name,
        require('./foo').name,
        require('../common/common.js').name,
    ])