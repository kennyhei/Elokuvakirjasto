MovieApp.service('AuthenticationService', function($firebaseAuth) {

    var firebaseRef = new Firebase('https://torrid-torch-7773.firebaseio.com/movies');
    var firebaseAuth = $firebaseAuth(firebaseRef);

    this.login = function (email, password) {

        return firebaseAuth.$authWithPassword({
            email: email,
            password: password
        });
    }

    this.createUser = function (email, password) {

        return firebaseAuth.$createUser({
            email: email,
            password: password
        });
    }

    this.isLoggedIn = function () {
        return firebaseAuth.$waitForAuth();
    }

    this.logout = function () {
        firebaseAuth.$unauth();
    }

    this.getUserLoggedIn = function () {
        return firebaseAuth.$getAuth();
    }
});