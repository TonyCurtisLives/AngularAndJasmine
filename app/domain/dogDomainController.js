var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var DogDomainController = (function () {
            function DogDomainController(placeName) {
                this.placeName = placeName;
                this.placeObjects = [];
            }
            DogDomainController.prototype.initializeObjects = function () {
                this.placeObjects.push(new virtdog.DogObject('Really Nice Couch', true, false));
                this.placeObjects[0].expensive = true;
                this.placeObjects[0].monetaryValue = 2000;
            };
            return DogDomainController;
        })();
        virtdog.DogDomainController = DogDomainController;
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=dogDomainController.js.map