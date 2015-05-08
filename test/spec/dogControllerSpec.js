/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/jasmine/jasmine.d.ts" />
describe("dogController.js", function () {
    beforeEach(module('app.dog'));
    describe('dogController', function () {
        var $rootScope, $controller, $interval, dogConfig, eventNames, dogConstructorParams;
        dogConfig = {
            appTitle: 'Virtual Dog Demo',
            version: '1.0.0',
            startDog: {},
            otherDogs: []
        };
        eventNames = {};
        beforeEach(inject(function ($injector) {
            // we need to construct every time so set up for that
            $controller = $injector.get('$controller');
            $rootScope = $injector.get('$rootScope');
            $interval = $injector.get('$interval');
            dogConstructorParams = {
                $rootScope: $rootScope,
                $interval: $interval,
                dogConfig: dogConfig,
                eventNames: eventNames
            };
        }));
        describe('Constructor:', function () {
            it('should set familiarName', function () {
                dogConfig.startDog.familiarName = 'testRover';
                var sut = $controller('dogController', dogConstructorParams);
                expect(sut.familiarName).toEqual(dogConfig.startDog.familiarName);
            });
            it('should set barkSound', function () {
                dogConfig.startDog.barkSound = 'testBark';
                var sut = $controller('dogController', dogConstructorParams);
                expect(sut.barkSound).toEqual(dogConfig.startDog.barkSound);
            });
            it('should set age', function () {
                dogConfig.startDog.age = 7;
                var sut = $controller('dogController', dogConstructorParams);
                expect(sut.age).toEqual(dogConfig.startDog.age);
            });
            it('should blog startupBlog', function () {
                var expectedBlog = 'Test Startup Blog';
                dogConfig.startDog.startupBlog = expectedBlog;
                var sut = $controller('dogController', dogConstructorParams);
                expect(sut.blogContent).toContain(expectedBlog);
            });
        });
        describe('On event masterThrow:', function () {
            eventNames.masterThrow = 'masterThrow';
            it('should blog "master" and "threw"', function () {
                var thrownObject = new dogsrus.virtdog.DogObject('testObject', false, false);
                spyOn(thrownObject, 'chewOn');
                var sut = $controller('dogController', dogConstructorParams);
                expect(sut.blogContent).not.toContain('master');
                expect(sut.blogContent).not.toContain('threw');
                $rootScope.$broadcast(eventNames.masterThrow, thrownObject);
                expect(sut.blogContent).toContain('master');
                expect(sut.blogContent).toContain('threw');
            });
            describe('when thrown object is chewy, not edible', function () {
                var thrownObject = new dogsrus.virtdog.DogObject('testChewyObject', true, false);
                it('should call chewOn for thrown object', function () {
                    spyOn(thrownObject, 'chewOn');
                    var sut = $controller('dogController', dogConstructorParams);
                    $rootScope.$broadcast(eventNames.masterThrow, thrownObject);
                    expect(thrownObject.chewOn).toHaveBeenCalled();
                });
            });
            describe('when thrown object is not chewy, not edible', function () {
                var thrownObject = new dogsrus.virtdog.DogObject('testNotChewyObject', false, false);
                // todo: fix
                it('should not call chewOn for thrown object', function () {
                    spyOn(thrownObject, 'chewOn');
                    var sut = $controller('dogController', dogConstructorParams);
                    $rootScope.$broadcast(eventNames.masterThrow, thrownObject);
                    expect(thrownObject.chewOn).not.toHaveBeenCalled();
                });
            });
            describe('when thrown object is edible', function () {
                var thrownObject = new dogsrus.virtdog.DogObject('testEdibleObject', false, true);
                beforeEach(function () {
                    spyOn(thrownObject, 'chewOn');
                });
                // todo: fix
                it('should not call chewOn for thrown object', function () {
                    var sut = $controller('dogController', dogConstructorParams);
                    $rootScope.$broadcast(eventNames.masterThrow, thrownObject);
                    expect(thrownObject.chewOn).not.toHaveBeenCalled();
                });
                // todo: fix
                it('should not blog "returned" because dog eats it', function () {
                    var sut = $controller('dogController', dogConstructorParams);
                    $rootScope.$broadcast(eventNames.masterThrow, thrownObject);
                    expect(sut.blogContent).not.toContain('returned');
                });
            });
        });
        describe('On chew urge interval expired', function () {
            dogConfig.startDog.chewUrgeInterval = 100;
            describe('with one chewObject', function () {
                var chewyObject = new dogsrus.virtdog.DogObject('testChewyObject', true, false);
                beforeEach(function () {
                    spyOn(chewyObject, 'chewOn');
                });
                it('should call chewOn for chewy object', function () {
                    var sut = $controller('dogController', dogConstructorParams);
                    sut.chewObjects.push(chewyObject);
                    $interval.flush(99);
                    expect(chewyObject.chewOn).not.toHaveBeenCalled();
                    $interval.flush(2);
                    expect(chewyObject.chewOn).toHaveBeenCalled();
                });
                it('should blog "chewed"', function () {
                    var sut = $controller('dogController', dogConstructorParams);
                    sut.chewObjects.push(chewyObject);
                    expect(sut.blogContent).not.toContain('chewed');
                    $interval.flush(101);
                    expect(sut.blogContent).toContain('chewed');
                });
                it('should blog chewyObject name', function () {
                    var sut = $controller('dogController', dogConstructorParams);
                    sut.chewObjects.push(chewyObject);
                    expect(sut.blogContent).not.toContain(chewyObject.name);
                    $interval.flush(101);
                    expect(sut.blogContent).toContain(chewyObject.name);
                });
            });
            describe('with three chewObjects', function () {
                var expensiveChewyObject = new dogsrus.virtdog.DogObject('expensiveChewyObject', true, false);
                expensiveChewyObject.expensive = true;
                var chewObjects = [
                    new dogsrus.virtdog.DogObject('junk', true, false),
                    new dogsrus.virtdog.DogObject('junk2', true, false)
                ];
                chewObjects.push(expensiveChewyObject);
                beforeEach(function () {
                    spyOn(expensiveChewyObject, 'chewOn');
                });
                it('should call chewOn for expensive object', function () {
                    var sut = $controller('dogController', dogConstructorParams);
                    sut.chewObjects.push(expensiveChewyObject);
                    $interval.flush(101);
                    expect(expensiveChewyObject.chewOn).toHaveBeenCalled();
                });
            });
        });
    });
});
//# sourceMappingURL=dogControllerSpec.js.map