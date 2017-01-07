MovieApp.service('FirebaseService', function($firebaseArray) {

    var firebaseRef = new Firebase('https://torrid-torch-7773.firebaseio.com/movies');
    var movies = $firebaseArray(firebaseRef);

    this.getMovie = function(key, callback) {

        // Make sure that movies are loaded first before
        // we fetch single movie
        movies.$loaded(function () {
            callback(movies.$getRecord(key));
        });
    }

    this.getMovies = function () {
        return movies;
    }

    this.addMovie = function (movie) {
        movies.$add(movie);
    }

    this.removeMovie = function (movie) {
        movies.$remove(movie);
    }

    this.editMovie = function (movie) {
        movies.$save(movie);
    }
});
