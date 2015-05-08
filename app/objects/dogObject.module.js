'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        (function () {
            angular.module('app.dogObject', []);
        })();
        // we don't ever refer to the app module except in tests
        // but the other modules may be refered 2+ times
        function getModuleDogObject() {
            return angular.module('app.dogObject');
        }
        virtdog.getModuleDogObject = getModuleDogObject;
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=dogObject.module.js.map