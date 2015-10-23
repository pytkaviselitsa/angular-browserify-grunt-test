
// exports.inject = function(app) {
//     app.factory('mainService', exports.factory);
//     return exports.factory;
// }

// exports.factory = function($q) {
//     return {
//     	getData: getData
//     };

//     function getData(){
// 	  	var deferred = $q.defer
// 	  	deferred.resolve("SOME DATA")
// 	  	return deferred.promise
// 	  }
// };