/* jshint camelcase: false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('ForecastController', ['$scope','wu', function($scope, wu){
    $scope.title = 'Current Forecast';

    $scope.getForecast10day = function(){
      wu.getForecast10day($scope.zip).then(function(response){
        $scope.forecasts = response.data.forecast.txt_forecast.forecastday;
        console.log(response);
      });
    };
  }]);

})();
