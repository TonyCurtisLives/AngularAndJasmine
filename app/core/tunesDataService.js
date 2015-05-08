var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var TunesDataService = (function () {
            function TunesDataService($http, tunesConfig) {
                this.$http = $http;
                this.tunesConfig = tunesConfig;
            }
            TunesDataService.prototype.getArtistTopAlbums = function (artist) {
                var tunesConfig = {
                    method: 'GET',
                    url: this.tunesConfig.tunesUrl,
                    params: {
                        'method': 'artist.gettopalbums',
                        'artist': artist,
                        'api_key': this.tunesConfig.apiKey,
                        'format': 'json',
                        'preventIECache': new Date().getTime()
                    }
                };
                return this.$http(tunesConfig).then(function (results) {
                    return results.data;
                }, function (response) {
                    return response;
                });
            };
            TunesDataService.prototype.getLovedTracks = function (user) {
                var tunesConfig = {
                    method: 'GET',
                    url: this.tunesConfig.tunesUrl,
                    params: {
                        'method': 'user.getLovedTracks',
                        'user': user,
                        'api_key': this.tunesConfig.apiKey,
                        'format': 'json',
                        'preventIECache': new Date().getTime()
                    }
                };
                return this.$http(tunesConfig).then(function (results) {
                    return results.data;
                }, function (response) {
                    return response;
                });
            };
            TunesDataService.$inject = ['$http', 'tunesConfig'];
            return TunesDataService;
        })();
        virtdog.TunesDataService = TunesDataService;
        (function () {
            dogsrus.virtdog.getModuleCore().service('tunesDataService', TunesDataService);
        })();
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=tunesDataService.js.map