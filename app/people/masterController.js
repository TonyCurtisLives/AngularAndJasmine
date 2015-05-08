var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var MasterAction = (function () {
            function MasterAction(actionName, actionFunc) {
                this.actionName = actionName;
                this.actionFunc = actionFunc;
            }
            return MasterAction;
        })();
        virtdog.MasterAction = MasterAction;
        var MasterController = (function () {
            function MasterController($rootScope, eventNames) {
                this.$rootScope = $rootScope;
                this.eventNames = eventNames;
                this.speciesName = 'Homo Sapiens';
                this.masterActions = [];
                this.mastersObjects = [];
                this.familiarName = 'Bob';
                this.initializeLists();
                // bind this to actions since they are called from html binding
                this.throwSomething = this.throwSomething.bind(this);
                this.masterActions[0].actionFunc = this.masterActions[0].actionFunc.bind(this);
                this.feedTheDog = this.feedTheDog.bind(this);
                this.masterActions[1].actionFunc = this.masterActions[1].actionFunc.bind(this);
            }
            MasterController.prototype.throwSomething = function (object) {
                this.$rootScope.$broadcast(this.eventNames.masterThrow, object);
                return {};
            };
            MasterController.prototype.feedTheDog = function (food) {
                this.$rootScope.$broadcast(this.eventNames.masterFeed, food);
                return {};
            };
            // --------------------- private stuff down here -------------------------------
            MasterController.prototype.initializeLists = function () {
                this.masterActions.push(new MasterAction('Throw Object', this.throwSomething));
                this.masterActions.push(new MasterAction('Feed', this.feedTheDog));
                var dogObject = new virtdog.DogObject('Babe Ruth autographed baseball', true, false);
                dogObject.bounces = true;
                dogObject.expensive = true;
                dogObject.irreplaceable = true;
                dogObject.monetaryValue = 100000;
                dogObject.chewLimit = 15;
                this.mastersObjects.push(dogObject);
                dogObject = new virtdog.DogObject('ball', true, false);
                dogObject.bounces = true;
                dogObject.chewLimit = 100;
                this.mastersObjects.push(dogObject);
                dogObject = new virtdog.DogObject('Frisbee', true, false);
                dogObject.flies = true;
                dogObject.chewLimit = 20;
                this.mastersObjects.push(dogObject);
                this.mastersObjects.push(new virtdog.DogObject('stick', true, false));
                this.mastersObjects.push(new virtdog.DogObject('dog food', true, true));
                this.mastersObjects.push(new virtdog.DogObject('table scraps', true, true));
            };
            MasterController.$inject = ['$rootScope', 'eventNames'];
            return MasterController;
        })();
        virtdog.MasterController = MasterController;
        (function () {
            dogsrus.virtdog.getModulePeople().controller('masterController', MasterController);
        })();
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=masterController.js.map