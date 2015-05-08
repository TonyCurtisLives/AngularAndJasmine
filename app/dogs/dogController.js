'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var DogController = (function () {
            function DogController($rootScope, $interval, dogConfig, eventNames) {
                this.$rootScope = $rootScope;
                this.$interval = $interval;
                this.dogConfig = dogConfig;
                this.eventNames = eventNames;
                // interface first 
                this.speciesName = 'Canis familiaris';
                this.familiarName = '';
                this.coatStyle = '';
                this.tailStyle = '';
                this.earStyle = '';
                this.age = 0;
                this.barkSound = '';
                this.startupBlog = '';
                this.tailState = 1 /* elevated */;
                this.earState = '';
                this.chewUrgeInterval = 1000 * 60 * 60 * 6;
                this.motherNature1Interval = 1000 * 60 * 60 * 6;
                this.motherNature2Interval = 1000 * 60 * 60 * 6;
                this.dogTiredInterval = 1000 * 60 * 60 * 6;
                this.dogSleepDuration = 1000 * 60 * 60 * 6;
                this.dogLonleyEndurance = 1000 * 60 * 60 * 6;
                this.dogLonleyDuration = 1000 * 60 * 60 * 6;
                this.blogContent = '';
                this.blogPreface = [''];
                this.chewObjects = [];
                this.dogList = [];
                // initialize startup dog
                this.initializeDog(this.dogConfig.startDog);
                this.initializeEvents();
                this.initializeLists();
                this.blog(this.startupBlog);
            }
            // public methods next
            DogController.prototype.testBark = function () {
                this.bark(3);
            };
            DogController.prototype.getTailStateText = function () {
                // tip: how to get text from enum
                return virtdog.DogTailState[this.tailState];
            };
            // --------------------- private stuff down here -------------------------------
            DogController.prototype.initializeDog = function (dogToCopy) {
                this.familiarName = dogToCopy.familiarName;
                this.barkSound = dogToCopy.barkSound;
                this.age = dogToCopy.age;
                this.startupBlog = dogToCopy.startupBlog;
                this.chewUrgeInterval = dogToCopy.chewUrgeInterval;
            };
            DogController.prototype.initializeEvents = function () {
                var _this = this;
                // setup event handlers
                this.$rootScope.$on(this.eventNames.masterThrow, function (event, args) {
                    _this.fetch(args);
                });
                this.$rootScope.$on(this.eventNames.masterFeed, function (event, args) {
                    _this.eat(args);
                });
                this.chewPromise = this.$interval(function () {
                    _this.chewOnSomething();
                }, this.chewUrgeInterval, 0, true);
                this.$rootScope.$on(this.eventNames.decapitate, function (event, args) {
                    _this.decapitateHandler();
                });
                this.$rootScope.$on(this.eventNames.catHiss, function (event, args) {
                    _this.bark(10);
                });
                // bind all event handlers to this
                this.fetch = this.fetch.bind(this);
                this.eat = this.eat.bind(this);
                this.chewOnSomething = this.chewOnSomething.bind(this);
                this.decapitateHandler = this.decapitateHandler.bind(this);
                this.stopChewing = this.stopChewing.bind(this);
                this.bark = this.bark.bind(this);
            };
            DogController.prototype.initializeLists = function () {
                this.blogPreface.push('Guess what just happened! ');
                this.blogPreface.push('You\'ll never believe this! ');
                this.blogPreface.push('Oh my heck! ');
                this.blogPreface.push('So I was standing there minding my own business. ');
                for (var x = 1; x < this.dogConfig.otherDogs.length; x++) {
                    this.dogList.push(this.dogConfig.otherDogs[x]);
                }
                this.dogList.push(this.dogConfig.startDog);
            };
            DogController.prototype.blog = function (blogEntry, addPreface) {
                if (addPreface === void 0) { addPreface = true; }
                if (blogEntry !== '') {
                    this.blogContent += new Date().toLocaleString() + '\r\n';
                    if (addPreface) {
                        this.blogContent += this.blogPreface[Math.floor((Math.random() * this.blogPreface.length))];
                    }
                    this.blogContent += blogEntry + '\r\n';
                }
            };
            DogController.prototype.fetch = function (fetchObject) {
                var blogEntry = 'My master just threw a ' + fetchObject.name + '. ' + 'I ran with reckless abandon to grab the ' + fetchObject.name;
                if (fetchObject.flies) {
                    blogEntry += ' and leapt high into the air! Of course, I snatched it ' + 'right out of the air with a hang time resembling that of Air Jordan!';
                }
                else {
                    blogEntry += ' and, of course, I snatched it far sooner than any human ' + 'could have thought possible!';
                }
                if (fetchObject.chewy && !this.chewObjects.some(function (chewObject) {
                    return chewObject.name === fetchObject.name;
                })) {
                    this.chewObjects.push(fetchObject);
                }
                fetchObject.chewOn();
                blogEntry += '\r\nI gave the ' + fetchObject.name + ' a good chew or two and returned it.';
                this.blog(blogEntry);
            };
            DogController.prototype.bark = function (numberOfBarks) {
                var totalBarkText = '';
                for (var x = 0; x < numberOfBarks; x++) {
                    totalBarkText += this.barkSound + ' ';
                }
                this.blog(totalBarkText, false);
            };
            DogController.prototype.eat = function (food) {
                var blogEntry = '';
                blogEntry = 'My master just fed me ' + food.name;
                if (food.edible) {
                    if (food.name === 'dog food') {
                        blogEntry += '! I devoured the ' + food.name + ' in roughly 30 seconds!';
                        this.tailState = 0 /* wagging */;
                    }
                    else {
                        blogEntry += '! I devoured the ' + food.name + ' immediately' + ' and looked back up at him with a hungry face.';
                        this.tailState = 0 /* wagging */;
                    }
                }
                else {
                    blogEntry += '? I sniffed the ' + food.name + ' and looked up at my master with my head tilted.';
                    this.tailState = 1 /* elevated */;
                }
                this.blog(blogEntry);
            };
            DogController.prototype.chewOnSomething = function () {
                if (this.chewObjects.length !== 0) {
                    this.chewObjects.sort(function (chewObject1, chewObject2) {
                        return chewObject1.expensive > chewObject2.expensive ? -1 : chewObject1.expensive < chewObject2.expensive ? 1 : chewObject1.irreplaceable ? -1 : 0;
                    });
                }
                for (var x = 0; x < this.chewObjects.length; x++) {
                    if (this.chewObjects[x].chewy) {
                        this.chewObjects[x].chewOn();
                        this.blog('Suddenly I got an urge to chew on something! ' + 'I happily chewed on the ' + this.chewObjects[x].name + '!');
                        return;
                    }
                }
            };
            DogController.prototype.stopChewing = function () {
                this.$interval.cancel(this.chewPromise);
            };
            DogController.prototype.decapitateHandler = function () {
                this.stopChewing();
                this.tailState = 3 /* tucked */;
                this.blog('Oh no! Not the rab..................................');
            };
            // constructor next
            DogController.$inject = ['$rootScope', '$interval', 'dogConfig', 'eventNames'];
            return DogController;
        })();
        virtdog.DogController = DogController;
        (function () {
            dogsrus.virtdog.getModuleDog().controller('dogController', DogController);
        })();
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=dogController.js.map