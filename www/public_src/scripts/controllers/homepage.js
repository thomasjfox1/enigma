angular.module('enigma')
    .controller('HomepageCtrl', function($scope, ajaxService) {

        $scope.phrase = "";
        $scope.result = [];

        $scope.first = 'A';
        $scope.second = 'A';
        $scope.third = 'A';

        var startOrder = $scope.first + $scope.second + $scope.third;
        startOrder.toUpperCase();

        $scope.encrypt = function(){
            var startOrder = $scope.third + $scope.second + $scope.first;
            startOrder.toUpperCase();

            ajaxService.getEnigmaCipher($scope.phrase, startOrder).then(function(results){
                $scope.result = results;
            });
        };
    });
