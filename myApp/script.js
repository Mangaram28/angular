/*-var app = angular.module('main',['ngRoute']);

app.config(function($routeProvider){
       $routeProvider.when('/',{
         templateUrl: './components/home.html',
         controller:'myhome'
       }).when('/login',{
         templateUrl: './components/login.html',
         controller:'mylogin'
       }).otherwise({
         template:'404'
       })
});

app.controller('myhome',function($scope,$location){
  $scope.goToLogin = function() {
  		$location.path('/login');
  	};
  	$scope.register = function() {
  		$location.path('/register');
  	}
});*/


var applog = angular.module('myApp',['ngRoute']);

applog.config([ '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/home', {
            templateUrl : './components/home.html',
            controller : 'myhome'
        })
        $routeProvider.when('/', {
            templateUrl : 'login.html',
            controller : 'LoginController'
        }).otherwise({
            redirectTo : 'index.html'
        });
        //$locationProvider.html5Mode(true); //Remove the '#' from URL.
    }
]);

applog.controller("LoginController", function($scope, $location) {
    $scope.login = function() {
        var username = $scope.user.name;
        var password = $scope.user.password;
        if (username == "admin" && password == "admin") {
            $location.path("/home" );
        } else {
            alert('invalid username and password');
        }
    };
});

applog.controller("HomeController", function($scope, $location) {
  $scope.goToLogin = function() {
      $location.path('/login');
    };
    $scope.register = function() {
      $location.path('/register');
    }
});
