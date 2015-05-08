'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        (function () {
            angular.module('app.core', [
                'ngRoute'
            ]);
        })();
        function getModuleCore() {
            return angular.module('app.core');
        }
        virtdog.getModuleCore = getModuleCore;
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=core.module.js.map