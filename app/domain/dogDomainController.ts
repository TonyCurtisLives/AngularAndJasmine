module dogsrus.virtdog {
  export class DogDomainController {
    placeObjects: DogObject[] = [];

    constructor(public placeName: string) { }

    private initializeObjects() {
      this.placeObjects.push(
        new DogObject('Really Nice Couch', true, false)
        );
      this.placeObjects[0].expensive = true;
      this.placeObjects[0].monetaryValue = 2000;
    }
  }
}