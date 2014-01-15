'use strict';

angular.module('artisanApp')
    .controller('CartCtrl', function($scope, monocle, $stateParams, $filter) {
        $scope.quantity = 1;
    })