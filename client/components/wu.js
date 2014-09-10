(function(){
  'use strict';

  angular.module('weather')
  .factory('wu', ['$http', function($http){
    function getUrl(service, zip){
      return  'http://api.wunderground.com/api/467fe65116e04adf/'+service+'/q/'+zip+'.json?callback=JSON_CALLBACK';
    }
    function getConditions(zip){
      var url = getUrl('conditions', zip);
      return $http.jsonp(url);
    }
    function getWebcams(zip){
      var url = getUrl('webcams', zip);
      return $http.jsonp(url);
    }
    function getForecast10day(zip){
      var url = getUrl('forecast10day', zip);
      return $http.jsonp(url);
    }

    return{getConditions:getConditions, getWebcams:getWebcams, getForecast10day:getForecast10day};
  }]);
})();
