'use strict';

angular.module('artisanApp')
    .controller('CatalogCtrl', function ($scope, monocle, $stateParams, $filter) {

        $scope.catalogDetail = function() {
            $scope.showCatalogDetail = true;
        };

        $scope.strapQuery = monocle.Strap.query().howMany(500);
        $scope.strapQuery.fetch().success(function(data){
            console.log("Successfully fetched " + data.length + " straps.");
	          $scope.modelNames = _.uniq(_.pluck(data, 'model'));
	          $scope.modelExamples = [];
		        angular.forEach($scope.modelNames, function (value, key) {
			        $scope.modelExamples.push(_.find($scope.strapQuery.items, {model: value}));
		        });

        });

    });
