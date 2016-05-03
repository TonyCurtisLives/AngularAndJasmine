﻿namespace dogsrus.virtdog {
  export class PersonAction {
    constructor(
      public actionName: string,
      public actionFunc: (actionObject: DogObject) => {}
    ) { }
  }

  export class PeopleController {
    public people: IAnimal[] = [];
    public selectedPerson: IAnimal;

    public selectedAction: PersonAction;
    public personActions: PersonAction[] = [];

    static $inject = ['$rootScope', 'eventNames'];
    constructor(private $rootScope: ng.IRootScopeService, private eventNames: EventNames) {
      this.initializeLists();

      // bind this to actions since they are called from html binding
      this.commandStay = this.commandStay.bind(this);
      this.personActions[0].actionFunc = this.personActions[0].actionFunc.bind(this);
      this.commandShake = this.commandShake.bind(this);
      this.personActions[1].actionFunc = this.personActions[1].actionFunc.bind(this);
      this.runAway = this.runAway.bind(this);
      this.personActions[2].actionFunc = this.personActions[2].actionFunc.bind(this);
      this.pet = this.pet.bind(this);
      this.personActions[3].actionFunc = this.personActions[3].actionFunc.bind(this);
    }

    public commandStay(person) {
      this.$rootScope.$broadcast(this.eventNames.commandStay, person);
      return {};
    }

    public commandShake(person) {
      this.$rootScope.$broadcast(this.eventNames.commandShake, person);
      return {};
    }

    public runAway(person) {
      this.$rootScope.$broadcast(this.eventNames.animalRun, person);
      return {};
    }

    public pet(person) {
      this.$rootScope.$broadcast(this.eventNames.personPet, person);
      return {};
    }

    // --------------------- private stuff down here -------------------------------
    private initializeLists() {
      this.personActions.push(new PersonAction('Command Zeus to Stay', this.commandStay));
      this.personActions.push(new PersonAction('Command Zeus to Shake', this.commandShake));
      this.personActions.push(new PersonAction('Run Away', this.runAway));
      this.personActions.push(new PersonAction('Pet Zeus', this.pet));

      this.people.push(
        {
          defaultAction: this.eventNames.personPet,
          familiarName: 'The Alpha Male',
          speciesName: 'Homo Sapiens'
        }
      );
      this.people.push(
        {
          defaultAction: this.eventNames.personPet,
          familiarName: 'The She Wolf',
          speciesName: 'Homo Sapiens'
        }
      );
      this.people.push(
        {
          defaultAction: this.eventNames.animalRun,
          familiarName: 'The Mailman',
          speciesName: 'Homo Sapiens'
        }
      );
    }
  }
  (() => {
    dogsrus.virtdog.getModulePeople().controller('peopleController', PeopleController);
  })();
}
