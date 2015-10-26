'use strict';

var fooService = function() {
	var param="123";

	return {
		getParam: getParam
	};

	function getParam(){
		return "foo"+param;
	}
};

fooService.$inject = [];
module.exports = fooService;