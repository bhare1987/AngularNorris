angular
  .module('AngularNorris')
  .controller('homeController', function($scope){


  })
  .controller('norrisController', function($scope, $log, norrisService){
    $scope.norrisJoke = "";
    $scope.userJoke = "";


    $scope.getNorrisJokeCtrl = function(){
      $log.debug('this works');
      norrisService.getNorrisJoke()
        .then(function(data){
          $log.debug(data);
          $scope.norrisJoke = data.data.value.joke;
        });
    }

    $scope.getUserJokeCtrl = function(firstName, lastName){
      $log.debug('this works');
      norrisService.getUserJoke(firstName, lastName)
        .then(function(data){
          $scope.userJoke = data.data.value.joke;
        });
    }

  });
