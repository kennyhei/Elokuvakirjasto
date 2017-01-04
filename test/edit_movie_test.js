describe('Edit movie', function() {
	var controller, scope;

	var FirebaseServiceMock, RouteParamsMock;

  	beforeEach(function(){
  		// Lisää moduulisi nimi tähän
            module('MovieApp');

            FirebaseServiceMock = (function () {

                var movie = {
                    name: 'Police Academy',
                    director: 'Hugh Wilson',
                    release: 1984,
                    description: 'Mahtava leffa!'
                }

                return {
                    editMovie: function (editedMovie) {
                        movie = editedMovie;
                    },

                    getMovie: function (key, done) {

                        if (key == 'abc123') {
                            done(movie);
                        } else {
                            done(null);
                        }
                    }
                }
            })();

            RouteParamsMock = (function () {

                return {
                    key: 'abc123'
                }
            })();


	    spyOn(FirebaseServiceMock, 'editMovie').and.callThrough();
	    spyOn(FirebaseServiceMock, 'getMovie').and.callThrough();

	    inject(function($controller, $rootScope) {
                scope = $rootScope.$new();
                controller = $controller('EditMovieController', {
                    $scope: scope,
                    FirebaseService: FirebaseServiceMock,
                    $routeParams: RouteParamsMock
                });
	    });
  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/*
  	* Testaa, että muokkauslomakkeen tiedot täytetään muokattavan elokuvan tiedoilla.
  	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
  	*/
  	it('should fill the edit form with the current information about the movie', function() {
            expect(FirebaseServiceMock.getMovie).toHaveBeenCalled();
            expect(scope.movie.name).toEqual('Police Academy');
            expect(scope.movie.director).toEqual('Hugh Wilson');
            expect(scope.movie.release).toEqual(1984);
  	});

  	/*
  	* Testaa, että käyttäjä pystyy muokkaamaan elokuvaa, jos tiedot ovat oikeat
	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
	*/
	it('should be able to edit a movie by its name, director, release date and description', function(){
            scope.movie.name = 'Police Academy 2: Their First Assignment';
            scope.movie.director = 'Jerry Paris';
            scope.movie.release = 1985;
            scope.editMovie(scope.movie);

            expect(FirebaseServiceMock.editMovie).toHaveBeenCalled();

            FirebaseServiceMock.getMovie('abc123', function (movie) {
                expect(movie.name).toEqual('Police Academy 2: Their First Assignment');
                expect(movie.director).toEqual('Jerry Paris');
                expect(movie.release).toEqual(1985);
            });
	});

	/*
	* Testaa, ettei käyttäjä pysty muokkaaman elokuvaa, jos tiedot eivät ole oikeat
	* Testaa myös, että Firebasea käyttävästä palvelusta ei kutsuta muokkaus-funktiota,
  	* käyttämällä not.toBeCalled-oletusta.
	*/
	it('should not be able to edit a movie if its name, director, release date or description is empty', function(){
            // TODO
            expect(true).toBe(true);
	});
});