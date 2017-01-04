MovieApp.controller('ShowMovieController', function($scope, $routeParams, FirebaseService) {

    var key = $routeParams.key;

    FirebaseService.getMovie(key, function(movie) {
        $scope.movie = movie;
    });
});
