var MovieApp = angular.module('MovieApp', ['ngRoute', 'firebase']);

MovieApp.config(function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

MovieApp.config(function ($routeProvider) {

    var baseRoot = 'app/js/views/';

    $routeProvider
    .when('/', {
        controller: 'ListMoviesController',
        templateUrl: baseRoot + 'list_movies.html',
        resolve: {
            currentAuth: function(AuthenticationService) {
                return AuthenticationService.isLoggedIn();
            }
        }
    })
    .when('/login', {
        controller: 'UserController',
        templateUrl: baseRoot + 'login.html',
        resolve: {
            currentAuth: function(AuthenticationService) {
                return AuthenticationService.isLoggedIn();
            }
        }
    })
    .when('/movies', {
        controller: 'ListMoviesController',
        templateUrl: baseRoot + 'list_movies.html',
        resolve: {
            currentAuth: function(AuthenticationService) {
                return AuthenticationService.isLoggedIn();
            }
        }
    })
    .when('/movies/new', {
        controller: 'AddMovieController',
        templateUrl: baseRoot + 'add_movie.html',
        resolve: {
            currentAuth: function(AuthenticationService) {
                return AuthenticationService.isLoggedIn();
            }
        }
    })
    .when('/movies/search', {
        controller: 'SearchMoviesController',
        templateUrl: baseRoot + 'search_movies.html',
        resolve: {
            currentAuth: function(AuthenticationService) {
                return AuthenticationService.isLoggedIn();
            }
        }
    })
    .when('/movies/:key', {
        controller: 'ShowMovieController',
        templateUrl: baseRoot + 'show_movie.html',
        resolve: {
            currentAuth: function(AuthenticationService) {
                return AuthenticationService.isLoggedIn();
            }
        }
    })
    .when('/movies/:key/edit', {
        controller: 'EditMovieController',
        templateUrl: baseRoot + 'edit_movie.html',
        resolve: {
            currentAuth: function(AuthenticationService) {
                return AuthenticationService.isLoggedIn();
            }
        }
    })
    .otherwise({
        redirectTo: '/'
    });
});

MovieApp.run(function (AuthenticationService, $location, $rootScope) {

    $rootScope.logout = function () {
        AuthenticationService.logout();

        $location.path('/login');
    }

    $rootScope.userLoggedIn = function () {
        return AuthenticationService.getUserLoggedIn();
    };

    $rootScope.isActive = function (route) {
        return route === $location.path();
    }
});
