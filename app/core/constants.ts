module dogsrus.virtdog {
  export class EventNames {
    dogBark = 'dogBark';
    dogChase = 'dogChase';
    catMeow = 'catMeow';
    catBO = 'catBO';
    catMove = 'catMove';
    catHiss = 'catHiss';
    decapitate = 'decapitate';
    masterCall = 'masterCall';
    masterThrow = 'masterThrow';
    masterFeed = 'masterFeed';
    masterTake = 'masterTake';
    motherNatureCalls1 = 'motherNatureCalls1';
    motherNatureCalls2 = 'motherNatureCalls2';
    hunger = 'hunger';
    chewUrge = 'chewUrge';
    exhaustion = 'exhaustion';
    loneliness = 'loneliness';
    excitement = 'excitement';
    layAround = 'layAround';
  }

  export class TunesConfig {
    tunesUrl = 'http://ws.audioscrobbler.com/2.0/';
    apiKey = '42ffa848055f141ed5018c49334fce47';
    userName = 'FidoSonOfRover';
  }
  
  export class DogPlaces {
    home: DogDomain = {name: 'home', imagePath: 'IMG_2749', indoors: true, placeObjects: []};
    frontYard: DogDomain = {name: 'frontYard', imagePath: '', indoors: false, placeObjects: []};
    backYard: DogDomain = {name: 'backYard', imagePath: '', indoors: false, placeObjects: []};
    park: DogDomain = {name: 'park', imagePath: '', indoors: false, placeObjects: []};
  }

  (() => {
    dogsrus.virtdog.getModuleCore().constant('eventNames', new EventNames());
    dogsrus.virtdog.getModuleCore().constant('tunesConfig', new TunesConfig());
    dogsrus.virtdog.getModuleCore().constant('dogPlaces', new DogPlaces());
  })();

}
