'use strict';

angular.module('artisanApp')
		.controller('ApplicationCtrl', function ($scope, $modal, monocle) {


			$scope.User = monocle.User;


			$scope.$watch('User.current()', function(){

//			window.console.log($scope.User.current());
				if(!monocle.User.current()){
					window.console.log("no current user");
				}
				else{
					$scope.user = monocle.User.current();
					$scope.user.load().success(function(){
						window.console.log('user successfully loaded');
					});
				}
			});

			$scope.logout = function () {
				$scope.user.logOut();
			};




			$scope.openLoginDialog = function () {
				window.console.log('opening dialog');
				var modalInstance = $modal.open({
					templateUrl:"/views/dialogs/login.html",
					controller: 'LoginCtrl'
				});
				modalInstance.result.then(function(data){
					window.console.log(data);
					window.console.log($scope.User.current());
				}).then(function(cancel){
							window.console.log('login cancelled');
						})

			};
		});

angular.module('artisanApp')
		.controller('LoginCtrl', function ($scope, $modalInstance, monocle) {

			$scope.login = true;
			$scope.error = null;

			$scope.showSignUp = function(){
				$scope.login = false;
			};


			$scope.newUser = new monocle.User();
			$scope.signUp = function()
			{
				$scope.newUser.signUp($scope.newUser.password).success( function(data)
				{
					window.console.log($scope.newUser.password);
					$scope.signIn($scope.newUser.username, $scope.newUser.password);

				})
						.error( function(error)
						{
							window.console.log(error);
							$scope.error = error.data.error;
						});
			};

			$scope.signIn = function(username, password)
			{
				$scope.error = "";
				monocle.User.login(username, password).success( function()
				{
					window.console.log('Sign in success');
					$scope.close('sign in successful');

				})
						.error( function(error)
						{
							window.console.log(error);
							$scope.error = error.data.error;
						});
			};



		  $scope.cancel = function () {
		    $modalInstance.dismiss();
		  };
			$scope.close = function () {
			  $modalInstance.close();
			}
		});
