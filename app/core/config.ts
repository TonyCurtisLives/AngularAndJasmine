module dogsrus.virtdog {
  export class DogConfiguration {
    public appTitle = 'Virtual Dog Demo';
    public version = '1.0.0';
    public startDog: IDog;
    public otherDogs: IDog[] = [];
    constructor() {
      this.startDog = {
        familiarName: 'Fido',
        speciesName: 'Canis familiaris',
        defaultAction: 'Lay around',
        coatStyle: '',
        tailStyle: '',
        earStyle: '',
        age: 5,
        barkSound: 'bark',
        startupBlog: 'I laid down and knocked my tail on the floor twice.',
        tailState: DogTailState.elevated,
        earState: '',
        chewUrgeInterval: 1000 * 20 * 1 * 1,
        motherNature1Interval: 1000 * 60 * 60 * 6,
        motherNature2Interval: 1000 * 60 * 60 * 6,
        dogTiredInterval: 1000 * 60 * 60 * 6,
        dogSleepDuration: 1000 * 60 * 60 * 6,
        dogLonleyEndurance: 1000 * 60 * 60 * 6,
        dogLonleyDuration: 1000 * 60 * 60 * 6
      };
      this.otherDogs.push({
        familiarName: 'Puppy Trouble',
        speciesName: 'Canis familiaris',
        defaultAction: 'Lay around',
        coatStyle: '',
        tailStyle: '',
        earStyle: '',
        age: 0.1,
        barkSound: 'yip',
        startupBlog: 'I wagged my tail, no I wagged my whole body! And while I did that I did my other favorite thing, I wet all over!',
        tailState: DogTailState.wagging,
        earState: '',
        chewUrgeInterval: 1000 * 15,
        motherNature1Interval: 1000 * 60,
        motherNature2Interval: 1000 * 60 * 60 * 1,
        dogTiredInterval: 1000 * 60 * 2,
        dogSleepDuration: 1000 * 60 * 4,
        dogLonleyEndurance: 1000 * 10,
        dogLonleyDuration: 1000 * 60 * 60 * 6
        }, {
        familiarName: 'Rover',
        speciesName: 'Canis familiaris',
        defaultAction: 'Lay around',
        coatStyle: '',
        tailStyle: '',
        earStyle: '',
        age: 5,
        barkSound: 'ruf',
        startupBlog: 'I ran up to my master wagging my tail!',
        tailState: DogTailState.wagging,
        earState: '',
        chewUrgeInterval: 1000 * 60 * 60 * 6,
        motherNature1Interval: 1000 * 60 * 60 * 6,
        motherNature2Interval: 1000 * 60 * 60 * 6,
        dogTiredInterval: 1000 * 60 * 60 * 6,
        dogSleepDuration: 1000 * 60 * 60 * 6,
        dogLonleyEndurance: 1000 * 60 * 60 * 6,
        dogLonleyDuration: 1000 * 60 * 60 * 6
      });
    }
  }
  (() => {
    dogsrus.virtdog.getModuleCore().value('dogConfig', new DogConfiguration());
  })();
} 