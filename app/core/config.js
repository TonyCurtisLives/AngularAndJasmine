var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var DogConfiguration = (function () {
            function DogConfiguration() {
                this.appTitle = 'Virtual Dog Demo';
                this.version = '1.0.0';
                this.otherDogs = [];
                this.startDog = {
                    familiarName: 'Fido',
                    speciesName: 'Canis familiaris',
                    coatStyle: '',
                    tailStyle: '',
                    earStyle: '',
                    age: 5,
                    barkSound: 'bark',
                    startupBlog: 'I laid down and knocked my tail on the floor twice.',
                    tailState: 1 /* elevated */,
                    earState: '',
                    chewUrgeInterval: 1000 * 20 * 1 * 1,
                    motherNature1Interval: 1000 * 60 * 60 * 6,
                    motherNature2Interval: 1000 * 60 * 60 * 6,
                    dogTiredInterval: 1000 * 60 * 60 * 6,
                    dogSleepDuration: 1000 * 60 * 60 * 6,
                    dogLonleyEndurance: 1000 * 60 * 60 * 6,
                    dogLonleyDuration: 1000 * 60 * 60 * 6
                };
                this.otherDogs.push({
                    familiarName: 'Puppy Trouble',
                    speciesName: 'Canis familiaris',
                    coatStyle: '',
                    tailStyle: '',
                    earStyle: '',
                    age: 0.1,
                    barkSound: 'yip',
                    startupBlog: 'I wagged my tail, no I wagged my whole body! And while I did that I did my other favorite thing, I wet all over!',
                    tailState: 0 /* wagging */,
                    earState: '',
                    chewUrgeInterval: 1000 * 15,
                    motherNature1Interval: 1000 * 60,
                    motherNature2Interval: 1000 * 60 * 60 * 1,
                    dogTiredInterval: 1000 * 60 * 2,
                    dogSleepDuration: 1000 * 60 * 4,
                    dogLonleyEndurance: 1000 * 10,
                    dogLonleyDuration: 1000 * 60 * 60 * 6
                }, {
                    familiarName: 'Rover',
                    speciesName: 'Canis familiaris',
                    coatStyle: '',
                    tailStyle: '',
                    earStyle: '',
                    age: 5,
                    barkSound: 'ruf',
                    startupBlog: 'I ran up to my master wagging my tail!',
                    tailState: 0 /* wagging */,
                    earState: '',
                    chewUrgeInterval: 1000 * 60 * 60 * 6,
                    motherNature1Interval: 1000 * 60 * 60 * 6,
                    motherNature2Interval: 1000 * 60 * 60 * 6,
                    dogTiredInterval: 1000 * 60 * 60 * 6,
                    dogSleepDuration: 1000 * 60 * 60 * 6,
                    dogLonleyEndurance: 1000 * 60 * 60 * 6,
                    dogLonleyDuration: 1000 * 60 * 60 * 6
                });
            }
            return DogConfiguration;
        })();
        virtdog.DogConfiguration = DogConfiguration;
        (function () {
            dogsrus.virtdog.getModuleCore().value('dogConfig', new DogConfiguration());
        })();
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=config.js.map