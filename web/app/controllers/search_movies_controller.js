MovieApp.controller('SearchMoviesController', function($scope, OMDbService) {

    $scope.searched = false;

    $scope.findMovies = function () {

        var title = $scope.title,
            year  = $scope.year;

        OMDbService.findMovies(title, year).then(function (results) {
            $scope.movies = results.data.Search;
            $scope.searched = true;
        });
    }
});
