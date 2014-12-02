angular.module('enigma', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/pages/homepage.html',
                controller: 'HomepageCtrl'
            })
            .when('/enigma', {
              templateUrl: 'views/pages/enigma.html',
              controller: 'EnigmaCtrl'
            })
            .when('/history', {
              templateUrl: 'views/pages/history.html',
              controller: 'HistoryCtrl'
            })
            .when('/citations', {
              templateUrl: 'views/pages/citations.html',
              controller: 'CitationsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
});
