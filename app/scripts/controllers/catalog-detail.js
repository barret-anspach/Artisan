'use strict';

angular.module('artisanApp')
    .controller('CatalogDetailCtrl', function ($scope, monocle, $stateParams, $filter) {


			if($stateParams.model){

				$scope.strapQuery = monocle.Strap.query({model: $stateParams.model});
				$scope.strapQuery.fetch().success(function(data){
					window.console.log('successfully loaded ' + data.length + ' straps of model ' + $stateParams.model);
					$scope.initColors = _.uniq(_.pluck(data, 'colorName'));
					$scope.initLengths = _.uniq(_.pluck(data, 'length'));
					$scope.initSizes = _.uniq(_.pluck(data, 'size'));
					$scope.currentStrap = data[0];

					$scope.availableStraps = data;
					$scope.getUniqueOptions($scope.availableStraps);
					$scope.getStrapOptions($scope.availableStraps);

				});
			}

			$scope.getUniqueOptions = function(list){
				$scope.availableColors = _.uniq(_.pluck(list, 'colorName'));
				$scope.availableSizes = _.uniq(_.pluck(list, 'size'));
				$scope.availableLengths = _.uniq(_.pluck(list, 'length'));
				window.console.log($scope.availableStraps);
			};


			$scope.getStrapOptions = function(list){
				$scope.strapOptions = {
					color: _.uniq(_.pluck(list, 'colorName')),
					size: _.uniq(_.pluck(list, 'size')),
					length: _.uniq(_.pluck(list, 'length'))
				};
			};


			$scope.filterIt = function (key, value) {
				var keyLength = _.keys($scope.search).length;
				if(keyLength === 0){
//					do search no restrictions
				}
				if(keyLength === 1){

				}
				if(keyLength === 2){

				}

				$scope.getStrapOptions($scope.availableStraps);
				$scope.search[key] = value;
				$scope.availableStraps = ($filter('filter')($scope.strapQuery.items, $scope.search));
				$scope.getUniqueOptions($scope.availableStraps);

			};

      $('input.color-sq').tooltip('hide');
      $scope.showMenu = false;
      $scope.quantity = 1;
			$scope.$stateParams = $stateParams;
			$scope.search = {};

			$scope.addToCart = function(strap){
				window.console.log('adding strap to cart');
				if(!$scope.user){
					$scope.openLoginDialog();
				}
				else{
					$scope.User.shoppingCart.add(strap);
					$scope.user.save().success(function(){
						window.console.log('saved user successfully');
					});
				}
			};

			$scope.rgb = function(color){
				var strap = _.find($scope.strapQuery.items, {colorName: color});
				return strap.rgbVal;
			};

			$scope.colorAvailable = function(color){
//				console.log(color);
//				console.log($scope.availableColors);
				if(!color || !$scope.availableColors){
					return null
				}
				return _.contains($scope.availableColors, color)
			};

			$scope.initLengthAvailable = function(length){
				return _.contains($scope.initLengths, length);
			};

			$scope.inAvailableSizes = function (size) {
				return _.contains($scope.previousSizes, size);
			};

			$scope.inStrapOptions = function(key, value){
				return _.contains($scope.strapOptions[key], value);
			};


			$scope.lengthAvailable = function(length){
				return _.contains($scope.availableLengths, length);
			};



    });
