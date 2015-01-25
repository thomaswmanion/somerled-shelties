'use strict';

angular.module('somerledSheltiesApp').directive('footer', function() {
	return {
		restrict: 'E',
    	templateUrl: 'components/footer/footer.html',
    	link: function(scope) {
    		scope.year = new Date().getFullYear()
    	}
  	};
});