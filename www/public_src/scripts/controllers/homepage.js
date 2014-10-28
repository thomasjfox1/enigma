angular.module('wwwApp')
    .controller('HomepageCtrl', function($scope, ajaxService) {

        $scope.headerSize = null;
        $scope.subTitleSize = null;
        $scope.titleBGColor = '#555';

        $scope.colorOptions = ['#002635', '#013440', '#AB1A25', '#D97925'];

        ajaxService.getAppTitle().then(function(results){
            $scope.mainTitle = results;
        });

        $scope.changeColor = function(color){
          $scope.titleBGColor = color;
        };

    });
