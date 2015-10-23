module.exports = function($scope, $state, fooService) {
  $scope.bar = "Testing...BAR";

  $scope.RunAction = function(){
  		 console.log("RunAction foo!!!!!!");
  		$state.go("foo")
  }
  console.log("---BARCtrl run.  fooService.getParam=", fooService.getParam(), "---");
};