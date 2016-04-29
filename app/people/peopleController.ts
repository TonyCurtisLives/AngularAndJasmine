module dogsrus.virtdog {
  export class PersonAction {
    constructor(
      public actionName: string,
      public actionFunc: (actionObject: DogObject) => {}
    ) {}
  }

  export class PeopleController {
    public people: IAnimal[] = [];
    public selectedPerson: IAnimal;

    selectedAction: PersonAction;
    personActions: PersonAction[] = [];

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

    commandStay(person) {
      this.$rootScope.$broadcast(this.eventNames.commandStay, person);
      return {};
    }

    commandShake(person) {
      this.$rootScope.$broadcast(this.eventNames.commandShake, person);
      return {};
    }
    
    runAway(person) {
      this.$rootScope.$broadcast(this.eventNames.animalRun, person);
      return {};
    }

    pet(person) {
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
          speciesName: 'Homo Sapiens',
          familiarName: 'The Alpha Male',
          defaultAction: this.eventNames.personPet
        }
      );
      this.people.push(
        {
          speciesName: 'Homo Sapiens',
          familiarName: 'The She Wolf',
          defaultAction: this.eventNames.personPet
        }
      );
      this.people.push(
        {
          speciesName: 'Homo Sapiens',
          familiarName: 'The Mailman',
          defaultAction: this.eventNames.animalRun
        }
      );
    }
  }
  (() => {
    dogsrus.virtdog.getModulePeople().controller('peopleController', PeopleController);
  })();
}