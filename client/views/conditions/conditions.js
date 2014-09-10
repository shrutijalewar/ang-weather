/* jshint camelcase: false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope','wu', function($scope, wu){
    $scope.title = 'Current Conditions';

    $scope.getConditions = function(){
      wu.getConditions($scope.zip).then(function(response){
        $scope.tempC = response.data.current_observation.temp_c;
        $scope.url = response.data.current_observation.icon_url;
        $scope.vis = response.data.current_observation.visibility_km;
        $scope.wind = response.data.current_observation.wind_gust_kph;
        console.log(response);
      });
    };
  }]);

})();
