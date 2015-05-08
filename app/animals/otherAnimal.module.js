'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        (function () {
            angular.module('app.otherAnimal', []);
        })();
        // we don't ever refer to the app module except in tests
        // but the other modules may be refered 2+ times
        function getModuleOtherAnimal() {
            return angular.module('app.otherAnimal');
        }
        virtdog.getModuleOtherAnimal = getModuleOtherAnimal;
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=otherAnimal.module.js.map