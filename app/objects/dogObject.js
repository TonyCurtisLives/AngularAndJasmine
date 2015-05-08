var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        (function (DogSpitState) {
            DogSpitState[DogSpitState["noSpit"] = 0] = "noSpit";
            DogSpitState[DogSpitState["someSpit"] = 1] = "someSpit";
            DogSpitState[DogSpitState["soggyAndSlimy"] = 2] = "soggyAndSlimy";
        })(virtdog.DogSpitState || (virtdog.DogSpitState = {}));
        var DogSpitState = virtdog.DogSpitState;
        (function (ObjectState) {
            ObjectState[ObjectState["mintCondition"] = 0] = "mintCondition";
            ObjectState[ObjectState["littleBitChewed"] = 1] = "littleBitChewed";
            ObjectState[ObjectState["veryChewed"] = 2] = "veryChewed";
            ObjectState[ObjectState["structurallyDamaged"] = 3] = "structurallyDamaged";
            ObjectState[ObjectState["shredded"] = 4] = "shredded";
        })(virtdog.ObjectState || (virtdog.ObjectState = {}));
        var ObjectState = virtdog.ObjectState;
        var DogObject = (function () {
            function DogObject(name, chewy, edible) {
                this.name = name;
                this.chewy = chewy;
                this.edible = edible;
                this.expensive = false;
                this.irreplaceable = false;
                this.flies = false;
                this.bounces = false;
                this.monetaryValue = 0;
                this.spitState = 0 /* noSpit */;
                this.shredable = false;
                this.impervious = false;
                this.chewLimit = 0;
                this.state = 0 /* mintCondition */;
            }
            DogObject.prototype.getSpitStateText = function () {
                return DogSpitState[this.spitState];
            };
            DogObject.prototype.getStateText = function () {
                return ObjectState[this.state];
            };
            DogObject.prototype.chewOn = function () {
                if (this.spitState < 2 /* soggyAndSlimy */) {
                    this.spitState++;
                }
                if (this.impervious) {
                    return;
                }
                this.monetaryValue /= 2;
                this.expensive = this.monetaryValue > 100;
                if (this.chewLimit > 0) {
                    this.chewLimit--;
                    if (this.state === 0 /* mintCondition */) {
                        this.state++;
                    }
                    else if (this.chewLimit < 10 && this.state === 1 /* littleBitChewed */) {
                        this.state++;
                    }
                    else if (this.chewLimit < 5 && this.state === 2 /* veryChewed */) {
                        this.state++;
                    }
                    return;
                }
                if (this.state === 2 /* veryChewed */) {
                    if (this.shredable) {
                        this.state++;
                    }
                    else {
                        this.state += 2;
                    }
                }
                else if (this.state < 3 /* structurallyDamaged */) {
                    this.state++;
                }
            };
            return DogObject;
        })();
        virtdog.DogObject = DogObject;
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=dogObject.js.map