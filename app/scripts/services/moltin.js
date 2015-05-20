'use strict';

angular.module('storefrontapp.moltin', [])
	.factory('MoltinAuth', function($q){
		var deferred = $q.defer();
		var moltin = new Moltin({publicId: 'emRYTlrwqsy1FRUoAH5IaE8GPQHWlJb0HNaPympJ'});
		moltin.Authenticate(function(){

			deferred.resolve(moltin);

		});

		return deferred.promise;

	});