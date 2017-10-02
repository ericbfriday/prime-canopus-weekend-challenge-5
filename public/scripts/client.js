var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'md.data.table']);
console.log('myApp sourced');

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/viewrealestate', {
        templateUrl: 'views/viewrealestate.html',
        controller: 'RealEstateController as rec'
    }).when('/addrealestate', {
        templateUrl: 'views/addrealestate.html',
        controller: 'RealEstateController as rec'
    }).otherwise({
        redirectTo: '/'
    });
});