'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        (function () {
            angular.module('app.dog', []);
        })();
        // we don't ever refer to the app module except in tests
        // but the other modules may be refered 2+ times
        function getModuleDog() {
            return angular.module('app.dog');
        }
        virtdog.getModuleDog = getModuleDog;
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=dog.module.js.map