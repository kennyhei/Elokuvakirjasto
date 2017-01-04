describe('Add movie', function() {
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
                }
            }
        })();

        spyOn(FirebaseServiceMock, 'getMovies').and.callThrough();
        spyOn(FirebaseServiceMock, 'addMovie').and.callThrough();

        inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            controller = $controller('AddMovieController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock
          });
        });
    });

    /*
    * Testaa alla esitettyjä toimintoja kontrollerissasi
    */

    /*
    * Testaa, että käyttäjä pystyy lisäämään elokuvan oikeilla tiedoilla.
    * Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
    * on kutsutta oikeaa funktiota lisäämällä siihen vakoilijan ja käyttämällä
    * toBeCalled-oletusta.
    */
    it('should be able to add a movie by its name, director, release date and description', function() {

        scope.name = 'Häjyt';
        scope.director = 'Aleksi Mäkelä';
        scope.release = 1999;

        scope.addMovie();

        expect(FirebaseServiceMock.addMovie).toHaveBeenCalled();
    });

    /*
    * Testaa, ettei käyttäjä pysty lisäämään elokuvaa väärillä tiedoilla.
    * Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
    * EI kutsuta funktiota, joka hoitaa muokkauksen. Voit käyttää siihen
    * not.toBeCalled-oletusta (muista not-negaatio!).
    */
    it('should not be able to add a movie if its name, director, release date or description is empty', function(){
        // TODO
        expect(true).toBe(true);
    });
});
