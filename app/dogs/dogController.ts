'use strict'
module dogsrus.virtdog {
  export class DogController implements IDog {
    // interface first 
    public speciesName = 'Canis familiaris';
    public familiarName = '';

    public coatStyle = '';
    public tailStyle = '';
    public earStyle = '';
    public age = 0;
    public barkSound = '';
    public startupBlog = '';
    public tailState = DogTailState.elevated;
    public earState = '';
    public chewUrgeInterval = 1000 * 60 * 60 * 6;
    public motherNature1Interval = 1000 * 60 * 60 * 6;
    public motherNature2Interval = 1000 * 60 * 60 * 6;
    public dogTiredInterval = 1000 * 60 * 60 * 6;
    public dogSleepDuration = 1000 * 60 * 60 * 6;
    public dogLonleyEndurance = 1000 * 60 * 60 * 6;
    public dogLonleyDuration = 1000 * 60 * 60 * 6;

    public blogContent = '';
    public blogPreface: string[] = [''];
    public chewObjects: DogObject[] = [];
    public dogList: IDog[] = [];
    public chewPromise: ng.IPromise<any>;

    // constructor next
    static $inject = ['$rootScope', '$interval', 'dogConfig', 'eventNames']; 
    constructor(
      private $rootScope: ng.IRootScopeService,
      private $interval: ng.IIntervalService,
      private dogConfig: DogConfiguration,
      private eventNames: EventNames
      ) {
      // initialize startup dog
      this.initializeDog(this.dogConfig.startDog);
      this.initializeEvents();
      this.initializeLists();

      this.blog(this.startupBlog);
    }

    // public methods next
    public testBark() {
      this.bark(3);
    }

    public getTailStateText() {
      // tip: how to get text from enum
      return DogTailState[this.tailState];
    }

// --------------------- private stuff down here -------------------------------
    private initializeDog(dogToCopy: IDog) {
      this.familiarName = dogToCopy.familiarName;
      this.barkSound = dogToCopy.barkSound;
      this.age = dogToCopy.age;
      this.startupBlog = dogToCopy.startupBlog;
      this.chewUrgeInterval = dogToCopy.chewUrgeInterval;
    }

    private initializeEvents() {
      // setup event handlers
      this.$rootScope.$on(this.eventNames.masterThrow, (event, args) => {
        this.fetch(<DogObject>args);
      });
      this.$rootScope.$on(this.eventNames.masterFeed, (event, args) => {
        this.eat(args);
      });
      this.chewPromise = this.$interval(() => {
        this.chewOnSomething()
      }, this.chewUrgeInterval, 0, true);
      this.$rootScope.$on(this.eventNames.decapitate, (event, args) => {
        this.decapitateHandler();
      });
      this.$rootScope.$on(this.eventNames.catHiss, (event, args) => {
        this.bark(10);
      });

      // bind all event handlers to this
      this.fetch = this.fetch.bind(this);
      this.eat = this.eat.bind(this);
      this.chewOnSomething = this.chewOnSomething.bind(this);
      this.decapitateHandler = this.decapitateHandler.bind(this);
      this.stopChewing = this.stopChewing.bind(this);
      this.bark = this.bark.bind(this);
    }

    private initializeLists() {
      this.blogPreface.push('Guess what just happened! ');
      this.blogPreface.push('You\'ll never believe this! ');
      this.blogPreface.push('Oh my heck! ');
      this.blogPreface.push('So I was standing there minding my own business. ');
      for (var x = 1; x < this.dogConfig.otherDogs.length; x++) {
        this.dogList.push(this.dogConfig.otherDogs[x]);
      }
      this.dogList.push(this.dogConfig.startDog);
    }

    private blog(blogEntry: string, addPreface: boolean = true): void {
      if (blogEntry !== '') {
        this.blogContent += new Date().toLocaleString() + '\r\n';
        if (addPreface) {
          this.blogContent += this.blogPreface[Math.floor(
            (Math.random() * this.blogPreface.length))];
        }
        this.blogContent += blogEntry + '\r\n';
      }
    }

    private fetch(fetchObject: DogObject) {
      var blogEntry = 'My master just threw a '
        + fetchObject.name + '. '
        + 'I ran with reckless abandon to grab the ' + fetchObject.name;
      if (fetchObject.flies) {
        blogEntry += ' and leapt high into the air! Of course, I snatched it '
          + 'right out of the air with a hang time resembling that of Air Jordan!';
      }
      else {
        blogEntry += ' and, of course, I snatched it far sooner than any human '
          + 'could have thought possible!'
      }

      if (fetchObject.chewy && !this.chewObjects.some((chewObject) => {
        return chewObject.name === fetchObject.name;
      })) {
        this.chewObjects.push(fetchObject);
      }
      fetchObject.chewOn();
      blogEntry += '\r\nI gave the ' + fetchObject.name
        + ' a good chew or two and returned it.'

      this.blog(blogEntry);
    }

    private bark(numberOfBarks: number) {
      var totalBarkText = '';
      for (var x = 0; x < numberOfBarks; x++) {
        totalBarkText += this.barkSound + ' ';
      }
      this.blog(totalBarkText, false);
    }

    private eat(food: DogObject) {
      var blogEntry: string = '';
      blogEntry = 'My master just fed me ' + food.name;
      if (food.edible) {
        if (food.name === 'dog food') {
          blogEntry += '! I devoured the ' + food.name
            + ' in roughly 30 seconds!';
          this.tailState = DogTailState.wagging;
        }
        else {
          blogEntry += '! I devoured the ' + food.name + ' immediately'
            + ' and looked back up at him with a hungry face.';
          this.tailState = DogTailState.wagging;
        }
      }
      else {
        blogEntry += '? I sniffed the ' + food.name
          + ' and looked up at my master with my head tilted.';
        this.tailState = DogTailState.elevated;
      }
      this.blog(blogEntry);
    }

    private chewOnSomething() {
      if (this.chewObjects.length !== 0) {
        this.chewObjects.sort((chewObject1, chewObject2) => {
          return chewObject1.expensive > chewObject2.expensive ? -1 :
            chewObject1.expensive < chewObject2.expensive ? 1 :
              chewObject1.irreplaceable ? -1 : 0
        });
      }

      for (var x = 0; x < this.chewObjects.length; x++) {
        if (this.chewObjects[x].chewy) {
          this.chewObjects[x].chewOn();
          this.blog('Suddenly I got an urge to chew on something! '
            + 'I happily chewed on the ' + this.chewObjects[x].name + '!');
          return;
        }
      }
    }

    private stopChewing() {
      this.$interval.cancel(this.chewPromise);
    }

    private decapitateHandler() {
      this.stopChewing();
      this.tailState = DogTailState.tucked;
      this.blog('Oh no! Not the rab..................................');
    }
  }
  (() => {
    dogsrus.virtdog.getModuleDog().controller('dogController', DogController);
  })();
} 