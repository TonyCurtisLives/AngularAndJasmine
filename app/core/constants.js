var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var EventNames = (function () {
            function EventNames() {
                this.dogBark = 'dogBark';
                this.dogChase = 'dogChase';
                this.catMeow = 'catMeow';
                this.catBO = 'catBO';
                this.catMove = 'catMove';
                this.catHiss = 'catHiss';
                this.decapitate = 'decapitate';
                this.masterCall = 'masterCall';
                this.masterThrow = 'masterThrow';
                this.masterFeed = 'masterFeed';
                this.masterTake = 'masterTake';
                this.motherNatureCalls1 = 'motherNatureCalls1';
                this.motherNatureCalls2 = 'motherNatureCalls2';
                this.hunger = 'hunger';
                this.chewUrge = 'chewUrge';
                this.exhaustion = 'exhaustion';
                this.loneliness = 'loneliness';
                this.excitement = 'excitement';
            }
            return EventNames;
        })();
        virtdog.EventNames = EventNames;
        var TunesConfig = (function () {
            function TunesConfig() {
                this.tunesUrl = 'http://ws.audioscrobbler.com/2.0/';
                this.apiKey = '42ffa848055f141ed5018c49334fce47';
                this.userName = 'FidoSonOfRover';
            }
            return TunesConfig;
        })();
        virtdog.TunesConfig = TunesConfig;
        (function () {
            dogsrus.virtdog.getModuleCore().constant('eventNames', new EventNames());
            dogsrus.virtdog.getModuleCore().constant('tunesConfig', new TunesConfig());
        })();
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=constants.js.map