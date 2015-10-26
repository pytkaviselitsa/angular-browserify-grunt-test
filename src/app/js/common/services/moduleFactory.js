'use strict';

var moduleFactory = function($q) {
	var param="123";

	this.$get = function(){
		var $factory_param = {
			param1:123,
			param2:456
		};

		$factory_param.get_sum = function get_sum(){
			return $factory_param.param1+$factory_param.param2;
		};

		return $factory_param;
	};
};

moduleFactory.$inject = ['$q'];
module.exports = moduleFactory;