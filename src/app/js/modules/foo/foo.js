'use strict';

function FooCtrl($scope, $state, deferFactory, fooService) {
  $scope.foo = "Testing...FOO!!!!!!";

  $scope.RunAction = function(){
  		$state.go("bar")
  }

  deferFactory.getParam().then(
    	function(result){
    		console.log("deferFactory.getParam result!!!", result)
    	})

  console.log("FooCtrl run.  fooService.getParam=", fooService.getParam());
};

FooCtrl.$inject = ['$scope', '$state', 'deferFactory', 'fooService'];
module.exports = FooCtrl;