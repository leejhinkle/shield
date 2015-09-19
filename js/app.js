/**
 * Created by leejhinkle on 17/9/15.
 */


var app = angular.module('shieldApp', ['ngRoute', 'ngAnimate', 'simpleAngularTicker']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'mainController',
            templateUrl: 'js/views/main.html'
        })
        .when('/login',{
            controller: 'mainController',
            templateUrl: 'js/views/login.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});