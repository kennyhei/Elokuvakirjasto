MovieApp.controller('AddMovieController', function($scope, $location, FirebaseService) {

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