var MovieApp = angular.module('MovieApp', ['ngRoute', 'firebase']);

MovieApp.config(function ($routeProvider) {

    $routeProvider
    .when('/movies', {
        controller: 'ListMoviesController',
        templateUrl: 'app/views/list_movies.html'
    })
    .when('/movies/new', {
        controller: 'AddMovieController',
        templateUrl: 'app/views/add_movie.html'
    })
    .when('/movies/:key', {
        controller: 'ShowMovieController',
        templateUrl: 'app/views/show_movie.html'
    })
    .when('/movies/:key/edit', {
        controller: 'EditMovieController',
        templateUrl: 'app/views/edit_movie.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
