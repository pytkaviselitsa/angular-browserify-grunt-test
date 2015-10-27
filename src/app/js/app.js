'use strict';

var angular = require('angular');

var app = angular.module('foobar', 
    [ 
        require('./common/common.js').name,
        require('./modules/modules.js').name,
        'templates-main'
    ]);

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/foo');

        $stateProvider
            .state('foo', {
                url: '/foo',
                templateUrl: "app/js/modules/foo/view.html",
                controller: require('./modules/foo/foo.js'),
            })
            .state('bar', {
                url: '/bar',
                templateUrl: "app/js/modules/bar/view.html",
                controller: require('./modules/bar/bar.js'),
            });

        }]
        );

app.controller('IndexCtrl', require('./index_controller.js'));