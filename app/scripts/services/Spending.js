'use strict';

angular.module('angularPassportApp')
.factory('Spending', ['$http', function($http) {

	return {
			get : function() {
				return 'buy all the things';
			},
			create : function(data) {

				return $http.post('api/blitz', data);
			},
			delete : function(id) {
				return $http.delete('/api/blitz/' + id);
			}
		}

}]);


