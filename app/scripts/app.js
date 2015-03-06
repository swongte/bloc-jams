//require('./landing');
 //require('./album');
 //require('./collection');
 //require('./profile');



 var blocJams = angular.module('BlocJams', ['ui.router']);
  

 blocJams.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);

   //console.log("hello");
 
   $stateProvider.state('landing', {
     url: '/',
     controller: 'Landing.controller',
     templateUrl: '/templates/landing.html'
   });

   //console.log("hi");
}]);
     
 

blocJams.controller('Landing.controller', ['$scope', function($scope) {
  $scope.subText = "Turn the music up!";

  console.log('hi there');

  $scope.subTextClicked = function() {
     $scope.subText += '!';
   };


 $scope.albumURLs = [
     '/images/album-placeholders/album-1.jpg',
     '/images/album-placeholders/album-2.jpg',
     '/images/album-placeholders/album-3.jpg',
     '/images/album-placeholders/album-4.jpg',
     '/images/album-placeholders/album-5.jpg',
     '/images/album-placeholders/album-6.jpg',
     '/images/album-placeholders/album-7.jpg',
     '/images/album-placeholders/album-8.jpg',
     '/images/album-placeholders/album-9.jpg',
   ];

 }]);

