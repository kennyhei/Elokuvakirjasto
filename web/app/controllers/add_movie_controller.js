MovieApp.controller('AddMovieController', function($scope, $location, currentAuth, FirebaseService) {

    // User not authenticated
    if (!currentAuth) {
        $location.path('/login');
    }

    $scope.partial = {
        url: 'app/views/partials/movie_form.html'
    }

    $scope.addMovie = function () {

        FirebaseService.addMovie({
            name: $scope.name,
            director: $scope.director,
            release: $scope.release
        });

        $scope.name = '';
        $scope.director = '';
        $scope.release = '';

        // Redirect to listing page
        $location.path('/movies');
    }
});
