MovieApp.controller('SearchMoviesController', function($scope, $location, currentAuth, OMDbService) {

    $scope.searched = false;

    $scope.findMovies = function () {

        var title = $scope.title,
            year  = $scope.year;

        OMDbService.findMovies(title, year).then(function (results) {
            $scope.movies = results.data.Search.filter(function (movie) {
                return movie.Type === 'movie';
            });
            $scope.searched = true;
        });
    }
});
