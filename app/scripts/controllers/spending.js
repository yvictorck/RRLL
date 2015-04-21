'use strict';


angular.module('angularPassportApp')
 .controller('Spending', function ($scope, $http, Spend, $location, $routeParams, $rootScope) {



Spend.get().success(function(data) {  $scope.tagline = data });



});