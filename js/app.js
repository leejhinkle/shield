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
        .when('/my-info',{
            controller: 'mainController',
            templateUrl: 'js/views/my-info.html'
        })
        .when('/practice',{
            controller: 'mainController',
            templateUrl: 'js/views/practice.html'
        })
        .when('/season',{
            controller: 'mainController',
            templateUrl: 'js/views/season.html'
        })
        .when('/tryouts',{
            controller: 'mainController',
            templateUrl: 'js/views/tryouts.html'
        })
        .when('/coaches',{
            controller: 'mainController',
            templateUrl: 'js/views/coaches.html'
        })
        .when('/create-user',{
            controller: 'mainController',
            templateUrl: 'js/views/create-user.html'

        })
        .otherwise({
            redirectTo: '/'
        });
});