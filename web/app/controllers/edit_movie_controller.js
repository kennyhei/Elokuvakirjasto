MovieApp.controller('EditMovieController', function($scope, $routeParams, $location, FirebaseService) {

    $scope.partial = {
        url: 'app/views/partials/movie_form.html'
    }

    var key = $routeParams.key;

    FirebaseService.getMovie(key, function (movie) {
        $scope.movie = movie;
        $scope.name = movie.name;
        $scope.director = movie.director;
        $scope.release = movie.release;
    });

    $scope.editMovie = function (movie) {

        movie.name = $scope.name;
        movie.director = $scope.director;
        movie.release = $scope.release;

        FirebaseService.editMovie(movie);
        $location.path('/movies/' + $routeParams.key);
    }
});
