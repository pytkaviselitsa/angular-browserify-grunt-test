'use strict';

var deferFactory = function($q) {
	var param="123";

	return {
		getParam: getParam
	};

	function getParam(){
		var defer = $q.defer();
		defer.resolve(param);
		return defer.promise;
	}
};

deferFactory.$inject = ['$q'];
module.exports = deferFactory;