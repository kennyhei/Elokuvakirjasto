describe('Show movie', function() {
    var controller, scope;

    var FirebaseServiceMock, RouteParamsMock;

    beforeEach(function() {
        module('MovieApp');

        FirebaseServiceMock = (function () {

            return {
                getMovie: function (key, done) {

                    if (key == 'abc123') {
                        done({
                            name: 'Police Academy',
                            director: 'Hugh Wilson',
                            release: 1984,
                            description: 'Mahtava leffa!'
                        });
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

        spyOn(FirebaseServiceMock, 'getMovie').and.callThrough();

        inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            controller = $controller('ShowMovieController', {
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
    * Testaa, että Firebasesta (mockilta) saatu elokuva löytyy kontrollerista.
    * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota
    * käyttämällä toBeCalled-oletusta.
    */
    it('should show current movie from Firebase', function() {
        expect(FirebaseServiceMock.getMovie).toHaveBeenCalled();
        expect(scope.movie.name).toEqual('Police Academy');
    });
});
