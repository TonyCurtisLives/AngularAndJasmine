module dogsrus.virtdog {
  export class DogDomainController {
    public placeObjects: DogObject[] = [];
    public place: DogDomain;
    public places: DogDomain[] = [];

    static $inject = ['$rootScope', 'dogPlaces']
    constructor(private $rootScope: ng.IRootScopeService, public dogPlaces: DogPlaces) {
      this.initializeDomain();
    }

    // default initialization is home
    private initializeDomain() {
      this.place = this.dogPlaces.home;
      this.places.push(this.dogPlaces.home);
      this.places.push(this.dogPlaces.backYard);
      this.places.push(this.dogPlaces.frontYard);
      this.places.push(this.dogPlaces.park);
      this.places.push(this.dogPlaces.bathroom);
      this.placeObjects.push(
        new DogObject('Really Nice Couch', true, false)
        );
      this.placeObjects[0].expensive = true;
      this.placeObjects[0].monetaryValue = 2000;
    }
  }
  (() => {
    dogsrus.virtdog.getModuleTunes().controller('dogDomainController', DogDomainController);
  })();
}
