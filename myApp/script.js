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
        }).when('/register',{
            templateUrl : './components/Register.html',
            controller : 'RegisterController'
        }).when('/user',{
            templateUrl: './components/showuser.html',
            controller: 'Showuser'
        }).otherwise({
            redirectTo : 'index.html'
        });
        //$locationProvider.html5Mode(true); //Remove the '#' from URL.
    }
);

applog.run(function($rootScope){
         $rootScope.department = 'Dashboard';
});

applog.factory('random',function(){
  var ramdomobject={};
  ramdomobject.generate = function(){
    var number = Math.floor(Math.random() * 1000);
    return number;
  }
  return ramdomobject;
});

applog.service('usersvc',function(){
      var username;

      this.setname= function(name){
         username = name;
      }
      this.getname = function(){
        return username;
      }
});

applog.controller("LoginController", function($scope, $location,usersvc) {
    $scope.login = function() {
        var username = $scope.usersname;
        var password = $scope.userspassword;

        usersvc.setname($scope.usersname);

        $location.path('/user');
    };


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

applog.controller("Showuser",function ($scope,usersvc,$http,random){

          $scope.generateClick = function(){
            $scope.button = random.generate();
          }
        
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

/*----------- Directive -------*/
applog.directive("w3", function() {
  return {
    restrict: 'AE',
    template : "<h1>Made by a directive</h1>"
  };
});

/*----------  Register ---------*/

applog.controller('RegisterController',function($scope){
      $scope.department ='register';

      var uid = 0;

      var contacts = [];
      
      $scope.saveContact = function(){
            $scope.newcontact.id = uid++;
            contacts.push($scope.newcontact);
            console.log(contacts);
            $scope.newcontact = {};    
      }
       
});
