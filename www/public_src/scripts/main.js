angular.module('wwwApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/pages/homepage.html',
                controller: 'HomepageCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
});
