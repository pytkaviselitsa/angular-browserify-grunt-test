'use strict';

function helloWorldProvider() {

	var color = 'Green';

	return {
    	setColor: function(newColor) {
	        color = newColor;
	    },
    	$get: function() {
	        return color;
	    }};
}

helloWorldProvider.$inject = [];
module.exports = helloWorldProvider;