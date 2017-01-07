MovieApp.controller('ListMoviesController', function($scope, $location, currentAuth, FirebaseService) {

    $scope.movies = FirebaseService.getMovies();

    $scope.removeMovie = function (movie) {
        FirebaseService.removeMovie(movie);
    }
});
