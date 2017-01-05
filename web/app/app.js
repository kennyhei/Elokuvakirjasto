var MovieApp = angular.module('MovieApp', ['ngRoute', 'firebase']);

MovieApp.config(function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

MovieApp.config(function ($routeProvider) {

    $routeProvider
    .when('/', {
        controller: 'ListMoviesController',
        templateUrl: 'app/views/list_movies.html',
        resolve: {
            currentAuth: function(AuthenticationService) {
                return AuthenticationService.isLoggedIn();
            }
        }
    })
    .when('/login', {
        controller: 'UserController',
        templateUrl: 'app/views/login.html',
        resolve: {
            currentAuth: function(AuthenticationService) {
                return AuthenticationService.isLoggedIn();
            }
        }
    })
    .when('/movies', {
        controller: 'ListMoviesController',
        templateUrl: 'app/views/list_movies.html',
        resolve: {
            currentAuth: function(AuthenticationService) {
                return AuthenticationService.isLoggedIn();
            }
        }
    })
    .when('/movies/new', {
        controller: 'AddMovieController',
        templateUrl: 'app/views/add_movie.html',
        resolve: {
            currentAuth: function(AuthenticationService) {
                return AuthenticationService.isLoggedIn();
            }
        }
    })
    .when('/movies/search', {
        controller: 'SearchMoviesController',
        templateUrl: 'app/views/search_movies.html',
        resolve: {
            currentAuth: function(AuthenticationService) {
                return AuthenticationService.isLoggedIn();
            }
        }
    })
    .when('/movies/:key', {
        controller: 'ShowMovieController',
        templateUrl: 'app/views/show_movie.html',
        resolve: {
            currentAuth: function(AuthenticationService) {
                return AuthenticationService.isLoggedIn();
            }
        }
    })
    .when('/movies/:key/edit', {
        controller: 'EditMovieController',
        templateUrl: 'app/views/edit_movie.html',
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
});
