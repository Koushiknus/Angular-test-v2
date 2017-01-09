(function functionName() {
  'use strict';
  var x="hello";
  angular.module('myApp',[])
.controller('MyFirstController',function($scope){
  $scope.name = "Koushik";

  $scope.sayHello = function(){
    return "Hello Users";
  }

});

})();
