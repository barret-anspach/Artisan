'use strict';

angular.module('artisanApp')
    .controller('CatalogDetailCtrl', function ($scope, monocle, $stateParams) {

        $('input.color-sq').tooltip('hide');
        $scope.showMenu = false;
        $scope.quantity = 1;

        if($stateParams.id){

            $scope.currentModel = new monocle.Model($stateParams.id);
            $scope.currentModel.load().success(function(){
                $scope.fetchStrapsByModel($scope.currentModel);
            });
        }

        $scope.whereClause = {};

        $scope.fetchStrapsByModel = function(model) {
            $scope.currentModel = model;

            $scope.whereClause = {model:{__type:"Pointer", className:"Model", objectId:model.objectId}};
            $scope.strapQuery = monocle.Strap.query($scope.whereClause).include(["material", "color", "model", "size"]);
            $scope.strapQuery.fetch().success(function(data) {
                console.log(data);
                $scope.currentModel.sizes = _.groupBy(_.pluck(data, "size"), function(size) {
                    return size.sizeInMillimeters;
                });
                $scope.currentModel.colors = _.groupBy(_.pluck(data, "color"), function(color) {
                    return color.name;
                });
                $scope.currentModel.lengths = _.uniq(_.pluck(data, "length"));
                console.log($scope.currentModel);
            })
        };

    });
