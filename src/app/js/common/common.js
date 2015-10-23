
require('angular-bootstrap');
require('angular-ui-router');

module.exports = angular.module('common',
    [
        'ui.bootstrap',
        'ui.router',
        require('./directives').name,
        require('./filters').name,
        require('./services').name
    ]);
