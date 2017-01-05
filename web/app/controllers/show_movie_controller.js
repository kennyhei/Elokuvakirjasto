MovieApp.controller('ShowMovieController', function($scope,
                                                    $location,
                                                    $routeParams,
                                                    currentAuth,
                                                    FirebaseService) {

    // User not authenticated
    if (!currentAuth) {
        $location.path('/login');
    }

    var key = $routeParams.key;

    FirebaseService.getMovie(key, function(movie) {
        $scope.movie = movie;
    });
});
