'use strict';
// Controller naming conventions should start with an uppercase letter
function IndexCtrl($scope, deferFactory) {

    $scope.test = null;
    $scope.test_text = "Testing...INDEX";
    deferFactory.getParam().then(
    	function(result){
    		console.log("PARAM", result);
    	});
    console.log('Up and running!');

}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
IndexCtrl.$inject = ['$scope', 'deferFactory'];
module.exports = IndexCtrl;