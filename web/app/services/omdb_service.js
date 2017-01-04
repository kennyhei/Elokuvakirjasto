MovieApp.service('OMDbService', function($http) {

    this.findMovies = function(name, year) {
        return $http.get('https://www.omdbapi.com', { params: { s: name, y: year } });
    }
});
