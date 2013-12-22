'use strict';

angular.module('artisanApp')
    .controller('CatalogCtrl', function ($scope, monocle, $stateParams) {

        $scope.catalogDetail = function() {
            $scope.showCatalogDetail = true;
        };

        $scope.modelQuery = monocle.Model.query();
        $scope.modelQuery.fetch().success(function(data){
            console.log("Successfully fetched " + data.length + " models.")
        });

    });
