'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        (function () {
            angular.module('app.tunes', []);
        })();
        // we don't ever refer to the app module except in tests
        // but the other modules may be refered 2+ times
        function getModuleTunes() {
            return angular.module('app.tunes');
        }
        virtdog.getModuleTunes = getModuleTunes;
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=tunes.module.js.map