module dogsrus.virtdog {
  export class OtherAnimalEnemiesController {
    enemyAnimals: any[] = [];
//    enemyAnimals: IAnimal[] = [];
    selectedEnemy: IAnimal;
    lastAction: string = '';

    static $inject = ['$rootScope', 'eventNames']
    constructor(private $rootScope: ng.IRootScopeService, private eventNames: EventNames) {
      this.intializeAnimalList(eventNames);
    }

    public performAction() {
      this.lastAction = (<any>this.selectedEnemy).defaultAction;
      this.$rootScope.$broadcast((<any>this.selectedEnemy).defaultAction);
    }

    private intializeAnimalList(eventNames: EventNames) {
      this.enemyAnimals.push(
        {
          speciesName: '',
          commonName: 'Alley Cat',
          defaultAction: eventNames.catHiss
        });
      this.enemyAnimals.push(
        {
          speciesName: '',
          commonName: 'No Ordinary Rabbit',
          defaultAction: eventNames.decapitate
        });
      this.performAction = this.performAction.bind(this);
    }
  }
  (() => {
    dogsrus.virtdog.getModuleOtherAnimal().controller('otherAnimalEnemiesController', OtherAnimalEnemiesController);
  })();
}