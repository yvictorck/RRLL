'use strict';

angular.module('angularPassportApp')
.factory('Blitz', ['$http', function($http) {

	return {
			get : function() {
				return $http.get('api/blitz');
			},
			create : function(data) {

				return $http.post('api/blitz', data);
			},
			delete : function(id) {
				return $http.delete('/api/blitz/' + id);
			}
		}

}]);


