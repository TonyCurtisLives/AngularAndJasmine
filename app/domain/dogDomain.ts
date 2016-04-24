'use strict'
module dogsrus.virtdog {
  export class DogDomain {
    public name = '';
    public indoors = true;
    public imagePath = '';
    public placeObjects: DogObject[] = [];
  }
  (() => {
    dogsrus.virtdog.getModuleTunes().controller('tunesController', TunesController);
  })();
}
