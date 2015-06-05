'use strict';

angular.module('storefrontApp')
  .controller('CartCtrl', function ($scope,MoltinAuth) {

  	$scope.cartStatus = 'Empty cart';
	
	MoltinAuth.$$state.value.Cart.Contents(function(items){

		$scope.totalItems = items.total_items;
		$scope.$apply();

		
	});
    
    MoltinAuth.$$state.value.Cart.Contents(function(items){

    	$scope.cartItems = items.contents;
    });

    // $scope.removeItem = function(item){
    // 	MoltinAuth.$$state.value.Cart.

    // }

	$scope.deleteCart = function(){

		MoltinAuth.$$state.value.Cart.Delete(function(){

			MoltinAuth.$$state.value.Cart.Contents(function(items){
			$scope.totalItems = items.total_items;
			$scope.$apply();
			
		});

		location.reload();

		});

	}

	$scope.removeItem = function(item){

		MoltinAuth.$$state.value.Cart.Remove(item,function(){

			remove(item);

			$scope.totalItems =  $scope.totalItems - 1;
			$scope.$apply();


		});

	}
	
	function remove(id) {

    	var elem;	

    	return (elem=document.getElementById(id)).parentNode.removeChild(elem);
	}

	function checkout()
	{
		console.log('I am in checkout!');

		alert("I'm doing that next!");
	}

}); 

