'use strict';


angular.module('angularPassportApp')
 .controller('SpendingCtrl', function ($scope, $http, Spending, $location, $routeParams, $rootScope) {



  $scope.tagline = Spending.get() ;



});