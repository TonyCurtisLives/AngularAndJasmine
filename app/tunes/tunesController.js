'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var TunesController = (function () {
            function TunesController(tunesDataService, tunesConfig) {
                this.tunesDataService = tunesDataService;
                this.tunesConfig = tunesConfig;
                this.data = {};
                this.tracksToDroolOver = [];
            }
            // not implemented yet
            TunesController.prototype.getArtistTopAlbums = function () {
                var _this = this;
                this.tunesDataService.getArtistTopAlbums('barking dogs').then(function (data) {
                    _this.data = data;
                });
            };
            TunesController.prototype.getLovedTracks = function () {
                var _this = this;
                this.tunesDataService.getLovedTracks(this.tunesConfig.userName).then(function (data) {
                    _this.tracksToDroolOver = data.lovedtracks.track;
                }, function (reason) {
                    _this.tunesError = reason;
                });
            };
            TunesController.$inject = ['tunesDataService', 'tunesConfig'];
            return TunesController;
        })();
        virtdog.TunesController = TunesController;
        (function () {
            dogsrus.virtdog.getModuleTunes().controller('tunesController', TunesController);
        })();
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=tunesController.js.map