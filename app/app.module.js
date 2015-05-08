/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        (function () {
            angular.module('app', [
                'app.core',
                'app.dogObject',
                'app.dog',
                'app.people',
                'app.tunes',
                'app.otherAnimal'
            ]);
        })();
        // we don't ever refer to the app module except in tests
        // but the other modules may be refered 2+ times
        function getModuleApp() {
            return angular.module('app');
        }
        virtdog.getModuleApp = getModuleApp;
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=app.module.js.map