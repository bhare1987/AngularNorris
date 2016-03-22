angular
  .module('AngularNorris')
  .service('norrisService', function($http){

    var norrisService = {
      baseUrl: 'http://api.icndb.com/',
      getNorrisJoke: function(){
        return $http.get(norrisService.baseUrl + 'jokes/random');
      },
      getUserJoke: function(firstName, lastName){
        return $http.get(norrisService.baseUrl + 'jokes/random?firstName=' + firstName + '&lastName=' + lastName);
      }
    }

    return {
      getNorrisJoke: norrisService.getNorrisJoke,
      getUserJoke: norrisService.getUserJoke
    }
  })
