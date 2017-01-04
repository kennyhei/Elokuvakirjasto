describe('Movie list', function () {

    var controller, scope;

    var FirebaseServiceMock;

    beforeEach(function() {
        module('MovieApp');

        FirebaseServiceMock = (function () {

            var movies = [
                {
                    name: 'Titanic',
                    director: 'James Cameron',
                    release: 1997
                },
                {
                    name: 'Terminator 2',
                    director: 'James Cameron',
                    release: 1991
                },
                {
                    name: 'Police Academy',
                    director: 'Hugh Wilson',
                    release: 1984
                }
            ];

            return {
                // Toteuta FirebaseServicen mockatut metodit tähän
                getMovies: function () {
                    return movies;
                },

                addMovie: function (movie) {
                    movies.push(movie);
                },

                removeMovie: function (movie) {
                    movies = movies.filter(function (elem) {
                        return elem.name !== movie.name;
                    });
                }
            }
        })();

        spyOn(FirebaseServiceMock, 'getMovies').and.callThrough();
        spyOn(FirebaseServiceMock, 'addMovie').and.callThrough();
        spyOn(FirebaseServiceMock, 'removeMovie').and.callThrough();

        inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            controller = $controller('ListMoviesController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock
          });
        });
    });

    /*
    * Testaa alla esitettyjä toimintoja kontrollerissasi
    */

    /*
    * Testaa, että Firebasesta (mockilta) saadut elokuvat löytyvät konrollerista
    * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
    * käyttämällä toBeCalled-oletusta.
    */
    it('should list all movies from the Firebase', function() {
        expect(scope.movies.length).toBe(3);
        expect(FirebaseServiceMock.getMovies).toHaveBeenCalled();
    });

    /*
    * Testaa, että elokuvan pystyy poistamaan Firebasesta.
    * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
    * käyttämällä toBeCalled-oletusta.
    */
    it('should be able to remove a movie', function(){
        scope.removeMovie(scope.movies[0]);
        expect(FirebaseServiceMock.removeMovie).toHaveBeenCalled();

        var movies = FirebaseServiceMock.getMovies();

        expect(movies.length).toBe(2);
        expect(movies[0].name).not.toEqual('Titanic');
    });
});
