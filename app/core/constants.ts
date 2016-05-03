import {getModuleCore} from './core.module';
import {DogDomain} from '../domain/dogDomain';
// module dogsrus.virtdog {
  export class EventNames {
    public dogBark = 'dogBark';
    public dogChase = 'dogChase';
    public catMeow = 'catMeow';
    public catBO = 'catBO';
    public catMove = 'catMove';
    public catHiss = 'catHiss';
    public decapitate = 'decapitate';
    public masterCall = 'masterCall';
    public masterThrow = 'masterThrow';
    public masterFeed = 'masterFeed';
    public masterTake = 'masterTake';
    public motherNatureCalls1 = 'motherNatureCalls1';
    public motherNatureCalls2 = 'motherNatureCalls2';
    public hunger = 'hunger';
    public chewUrge = 'chewUrge';
    public exhaustion = 'exhaustion';
    public loneliness = 'loneliness';
    public excitement = 'excitement';
    public layAround = 'layAround';
    public animalRun = 'animalRun';
    public personPet = 'personPet';
    public personThreaten = 'personThreaten';
    public commandSit = 'sit';
    public commandLayDown = 'lay down';
    public commandStay = 'stay';
    public commandShake = 'shake';
    public changeDomain = 'changeDomain';
  }
  
  export class TunesConfig {
    tunesUrl = 'http://ws.audioscrobbler.com/2.0/';
    apiKey = '42ffa848055f141ed5018c49334fce47';
    userName = 'FidoSonOfRover';
  }

  export class DogPlaces {
    home: DogDomain = {name: 'home', imagePath: 'zeushome.jpg', indoors: true, placeObjects: []};
    frontYard: DogDomain = {name: 'front yard', imagePath: 'zeusfrontyard.jpg', indoors: false, placeObjects: []};
    backYard: DogDomain = {name: 'back yard', imagePath: 'zeusbackyard.jpg', indoors: false, placeObjects: []};
    park: DogDomain = {name: 'park', imagePath: 'zeuspark.jpg', indoors: false, placeObjects: []};
    bathroom: DogDomain = {name: 'bathroom', imagePath: 'fireplug.jpg', indoors: false, placeObjects: []};
  }

  (() => {
    getModuleCore().constant('eventNames', new EventNames());
    getModuleCore().constant('tunesConfig', new TunesConfig());
    getModuleCore().constant('dogPlaces', new DogPlaces());
  })();
// }
