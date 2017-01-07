MovieApp.controller('UserController', function($rootScope, $scope, $location, AuthenticationService) {

    // Let's assume that user has already registered
    // and show login form by default
    $scope.registered = true;

    $scope.login = function () {

        AuthenticationService.login($scope.email, $scope.password)
        .then(function () {
            $location.path('/movies');
        })
        .catch(function () {
            $scope.message = 'Wrong email or password!';
        });
    }

    $scope.register = function () {

        AuthenticationService.createUser($scope.email, $scope.password)
        .then(function () {
            $scope.login();
        })
        .catch(function () {
            $scope.message = 'Unexpected error occurred. Try again.';
        });
    }
});
