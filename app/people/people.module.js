'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        (function () {
            angular.module('app.people', []);
        })();
        // we don't ever refer to the app module except in tests
        // but the other modules may be refered 2+ times
        function getModulePeople() {
            return angular.module('app.people');
        }
        virtdog.getModulePeople = getModulePeople;
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=people.module.js.map