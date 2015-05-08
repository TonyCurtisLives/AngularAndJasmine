'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        (function (DogTailState) {
            DogTailState[DogTailState["wagging"] = 0] = "wagging";
            DogTailState[DogTailState["elevated"] = 1] = "elevated";
            DogTailState[DogTailState["drooped"] = 2] = "drooped";
            DogTailState[DogTailState["tucked"] = 3] = "tucked";
        })(virtdog.DogTailState || (virtdog.DogTailState = {}));
        var DogTailState = virtdog.DogTailState;
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=IDog.js.map