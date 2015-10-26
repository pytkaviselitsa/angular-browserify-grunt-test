'use strict';

var angular = require('angular');

var app = angular.module('foobar', 
    [ 
        require('./common/common.js').name,
        require('./modules/modules.js').name
    ]);

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/foo');

        $stateProvider
            .state('foo', {
                url: '/foo',
                templateUrl: "js/modules/foo/view.html",
                controller: require('./modules/foo/foo.js'),
            })
            .state('bar', {
                url: '/bar',
                templateUrl: "js/modules/bar/view.html",
                controller: require('./modules/bar/bar.js'),
            });
        }]
        );

app.controller('IndexCtrl', require('./index_controller.js'));
// app.controller('fooCtrl', ['$scope', require('./index_controller.js')])
// app.factory('mainService', ['$scope', '$q', require('./app_service.js')])