var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var OtherAnimalEnemiesController = (function () {
            function OtherAnimalEnemiesController($rootScope, eventNames) {
                this.$rootScope = $rootScope;
                this.eventNames = eventNames;
                this.enemyAnimals = [];
                this.lastAction = '';
                this.intializeAnimalList(eventNames);
            }
            OtherAnimalEnemiesController.prototype.performAction = function () {
                this.lastAction = this.selectedEnemy.defaultAction;
                this.$rootScope.$broadcast(this.selectedEnemy.defaultAction);
            };
            OtherAnimalEnemiesController.prototype.intializeAnimalList = function (eventNames) {
                this.enemyAnimals.push({
                    speciesName: '',
                    commonName: 'Alley Cat',
                    defaultAction: eventNames.catHiss
                });
                this.enemyAnimals.push({
                    speciesName: '',
                    commonName: 'No Ordinary Rabbit',
                    defaultAction: eventNames.decapitate
                });
                this.performAction = this.performAction.bind(this);
            };
            OtherAnimalEnemiesController.$inject = ['$rootScope', 'eventNames'];
            return OtherAnimalEnemiesController;
        })();
        virtdog.OtherAnimalEnemiesController = OtherAnimalEnemiesController;
        (function () {
            dogsrus.virtdog.getModuleOtherAnimal().controller('otherAnimalEnemiesController', OtherAnimalEnemiesController);
        })();
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=otherAnimalEnemiesController.js.map