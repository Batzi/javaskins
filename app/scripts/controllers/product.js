'use strict';

angular.module('storefrontApp')
  .controller('ProductCtrl', function ($scope, product, moltin, $timeout) {
    $scope.product = product;
    $scope.addStatus = null;
    $scope.cartStatus = 'Empty cart';

    moltin.Cart.Contents(function(items){

    	$scope.totalItems = items.total_items;
    	$scope.$apply();
    });

    $scope.addCart = function(){

    	$scope.addStatus = 'Adding to cart...';
    	moltin.Cart.Insert(product.id, 1, null, function(){

            $scope.addStatus='Success!';
    		$scope.$apply();

    		$timeout(function() {

    			$scope.addStatus = null;

    		}, 1000);


    	});

}


  });
