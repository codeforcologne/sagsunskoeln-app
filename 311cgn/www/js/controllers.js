angular.module('starter.controllers', [])

.controller('SubmitCtrl', function($scope) {
    $scope.submit = [
        { location: 'My Loc' }
    ]; 
    
    
    var posOption = {timeout: 10000,enableHighAccuracy: true};
    
   navigator.geolocation.getCurrentPosition(function (position)  {
         $scope.location.lat = position.coords.latitude;
         $scope.location.long = position.coords.longitude;
        }, function(error){
          alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
        });
    
    
    $scope.greeting = "Aloa"; 
    
    
    
})

.controller('ListCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
