MovieApp.controller('SearchMoviesController', function($scope, $location, currentAuth, OMDbService) {

    $scope.searched = false;

    $scope.findMovies = function () {

        var title = $scope.title,
            year  = $scope.year;

        OMDbService.findMovies(title, year).then(function (results) {

            if (!results.data.Search) {
                $scope.movies = null;
            } else {
                $scope.movies = results.data.Search.filter(function (movie) {
                    return movie.Type === 'movie';
                });
            }

            $scope.searched = true;
        });
    }
});
