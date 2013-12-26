angular.module('artisanApp').filter('strapFilter', ['$filter', function($filter) {

	return function(input, criteria) {
		window.console.log(input);
		window.console.log(criteria);

	};

}]);