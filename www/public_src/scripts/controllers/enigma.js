angular.module('enigma')
.controller('EnigmaCtrl', function($scope, ajaxService) {

  // $scope.phrase = "";
  // $scope.result = [];

  $scope.first = 'A';
  $scope.second = 'A';
  $scope.third = 'A';

  var startOrder = $scope.first + $scope.second + $scope.third;
  startOrder.toUpperCase();

  $scope.encrypt = function(){
    $scope.first.toUpperCase();
    $scope.second.toUpperCase();
    $scope.third.toUpperCase();

    var startOrder = $scope.third + $scope.second + $scope.first;
    startOrder.toUpperCase();

    if($scope.phrase){
      ajaxService.getEnigmaCipher($scope.phrase, startOrder).then(function(results){
        $scope.result = results;
      });
    }
    else {
    }
  };
});
