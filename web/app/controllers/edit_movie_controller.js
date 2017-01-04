MovieApp.controller('EditMovieController', function($scope, $routeParams, $location, FirebaseService) {

    var key = $routeParams.key;

    FirebaseService.getMovie(key, function (movie) {
        $scope.movie = movie;
    });

    $scope.editMovie = function (movie) {

        FirebaseService.editMovie(movie);
        $location.path('/movies/' + $routeParams.key);
    }
});
