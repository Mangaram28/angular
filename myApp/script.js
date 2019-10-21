/*var app = angular.module('main',['ngRoute']);

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

applog.config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : './components/home.html',
            controller : 'HomeController'
        }).when('/login', {
            templateUrl : './components/login.html',
            controller : 'LoginController'
        }).when('/user',{
            templateUrl: './components/showuser.html',
            controller: 'Showuser'
        }).otherwise({
            redirectTo : 'index.html'
        });
        //$locationProvider.html5Mode(true); //Remove the '#' from URL.
    }
);

applog.service('usersvc',function(){
      var username;

      this.setname= function(name){
             username = name;
      }
      this.getname = function(){
        return username;
      }
});

applog.controller("LoginController", function($scope, $location,$rootScope,usersvc) {
    $scope.login = function() {
        var username = $scope.usersname;
        var password = $scope.userspassword;

        usersvc.setname($scope.usersname);

        $location.path('/user');

        /*if (username == "admin" && password == "admin") {
            $location.path("/user" );
        } else {
            alert('invalid username and password');
        }*/
    };

    $rootScope.department = 'Dashboard';
    $scope.firstname = 'login';

});

applog.controller("HomeController", function($scope, $location) {
    $scope.goToLogin = function() {
      $location.path('/login');
    };
    $scope.register = function() {
      $location.path('/register');
    };
});

applog.controller("Showuser",function ($scope,usersvc,$http){
  $scope.checker;
  $scope.showusername = usersvc.getname();

  $http.get("https://jsonplaceholder.typicode.com/todos").then(function(response){
      $scope.dataOut = response.data;

    });


$scope.insertData = function(){
      if($scope.checker === true){
                $scope.jsonData = $scope.dataOut;
      }else{
                $scope.jsonData = "";
      }
}

});

applog.directive("w3", function() {
  return {
    restrict: 'AE',
    template : "<h1>Made by a directive</h1>"
  };
});
