namespace dogsrus.virtdog {
  export class TunesDataService {
    static $inject = ['$http', 'tunesConfig'];
    constructor(private $http: ng.IHttpService, private tunesConfig: TunesConfig) { }

    public getArtistTopAlbums(artist: string) {
      let tunesConfig: ng.IRequestConfig = {
        method: 'GET',
        params: {
          'method': 'artist.gettopalbums',
          'artist': artist,
          'api_key': this.tunesConfig.apiKey,
          'format': 'json',
          'preventIECache': new Date().getTime()
        },
        url: this.tunesConfig.tunesUrl
      }

      return this.$http(tunesConfig).then(
        (results) => {
          return results.data;
        }, (response) => {
          return response;
        });
    }

    public getLovedTracks(user: string) {
      let tunesConfig: ng.IRequestConfig = {
        method: 'GET',
        params: {
          'method': 'user.getLovedTracks',
          'user': user,
          'api_key': this.tunesConfig.apiKey,
          'format': 'json',
          'preventIECache': new Date().getTime()
        },
        url: this.tunesConfig.tunesUrl
      }

      return this.$http(tunesConfig).then(
        (results) => {
          return results.data;
        }, (response) => {
          return response;
        });
    }
  }
  (() => {
    dogsrus.virtdog.getModuleCore().service('tunesDataService', TunesDataService);
  })();
}
