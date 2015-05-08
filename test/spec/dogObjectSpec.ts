describe('dogObject.js', function (){
  describe('dogObject', function () {
    var sut: dogsrus.virtdog.DogObject;
    beforeEach(function () {
      sut = new dogsrus.virtdog.DogObject('test', true, false);
    });
    describe('chewOn', function () {
      describe('object with no spit', function () {
        it('should set spitState to someSpit', function () {
          expect(sut.spitState).toEqual(
            dogsrus.virtdog.DogSpitState.noSpit);

          sut.chewOn();

          expect(sut.spitState).toEqual(
            dogsrus.virtdog.DogSpitState.someSpit);
        });
      });

      describe('impervious object', function () {
        it('should not change state', function () {
          sut.impervious = true;
          var expectedState = sut.state;

          sut.chewOn();

          expect(sut.state).toEqual(expectedState);
        });
      });

      describe('expensive object of $150 value', function () {
        beforeEach(function () {
          sut.expensive = true;
          sut.monetaryValue = 150;
        });
        it('should reduce the value by half', function () {

          sut.chewOn();

          expect(sut.monetaryValue).toEqual(150 / 2);
        });

        it('should set expensive to false', function () {

          sut.chewOn();

          expect(sut.expensive).toBeFalsy();
        });
      });

      describe('object in mint condition', function () {
        describe('and chewLimit of 0', function () {
          it('should degrade state', function () {
            sut.chewOn();

            expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.littleBitChewed);
          });
        });
        describe('and chewLimit of 10', function () {
          beforeEach(function () {
            sut.chewLimit = 10;
          });
          it('should degrade state', function () {
            sut.chewOn();

            expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.littleBitChewed);
          });
          it('should reduce chewLimit', function () {
            sut.chewOn();

            expect(sut.chewLimit).toEqual(9);
          });
        });
      });

      describe('object with state of littleBitChewed', function () {
        beforeEach(function () {
          sut.state = dogsrus.virtdog.ObjectState.littleBitChewed;
        });
        describe('and chewLimit of 11', function () {
          beforeEach(function () {
            sut.chewLimit = 11;
          });
          it('should not degrade state', function () {
            sut.chewOn();

            expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.littleBitChewed);
          });
          it('should reduce chewLimit', function () {
            sut.chewOn();

            expect(sut.chewLimit).toEqual(10);
          });
        });

        describe('and chewLimit of 10', function () {
          beforeEach(function () {
            sut.chewLimit = 10;
          });
          it('should degrade state', function () {
            sut.chewOn();

            expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.veryChewed);
          });
          it('should reduce chewLimit', function () {
            sut.chewOn();

            expect(sut.chewLimit).toEqual(9);
          });
        });

        describe('and chewLimit of 0', function () {
          it('should degrade state', function () {
            sut.chewOn();

            expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.veryChewed);
          });
        });
      });

      describe('object with state of veryChewed', function () {
        beforeEach(function () {
          sut.state = dogsrus.virtdog.ObjectState.veryChewed;
        });
        describe('and chewLimit of 6', function () {
          beforeEach(function () {
            sut.chewLimit = 6;
          });
          it('should not degrade state', function () {
            sut.chewOn();

            expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.veryChewed);
          });
          it('should reduce chewLimit', function () {
            sut.chewOn();

            expect(sut.chewLimit).toEqual(5);
          });
        });

        describe('and chewLimit of 5', function () {
          beforeEach(function () {
            sut.chewLimit = 5;
          });
          it('should degrade state', function () {
            sut.chewOn();

            expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.structurallyDamaged);
          });
          it('should reduce chewLimit', function () {
            sut.chewOn();

            expect(sut.chewLimit).toEqual(4);
          });
        });

        describe('and chewLimit of 0', function () {
          describe('and not shredable', function () {
            it('should degrade state to structurallyDamaged', function () {
              sut.chewOn();

              expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.structurallyDamaged);
            });
          });
          describe('and shredable', function () {
            beforeEach(function () {
              sut.shredable = true;
            });
            it('should degrade state to shredded', function () {
              sut.chewOn();

              expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.shredded);
            });
          });
        });
      });
    });
  });
}); 