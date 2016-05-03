import {getModuleCore} from './core.module';
import {TunesConfig} from './constants';
// module dogsrus.virtdog {
  export class TunesDataService {
    static $inject = ['$http', 'tunesConfig'];
    constructor(private $http: ng.IHttpService, private tunesConfig: TunesConfig) { }

    public getArtistTopAlbums(artist: string) {
      var tunesConfig: ng.IRequestConfig = {
        method: 'GET',
        url: this.tunesConfig.tunesUrl,
        params: {
          'method': 'artist.gettopalbums',
          'artist': artist,
          'api_key': this.tunesConfig.apiKey,
          'format': 'json',
          'preventIECache': new Date().getTime()
        }
      }

      return this.$http(tunesConfig).then(
        (results) => {
          return results.data
        }, (response) => {
          return response;
        });
    }

    public getLovedTracks(user: string) {
      var tunesConfig: ng.IRequestConfig = {
        method: 'GET',
        url: this.tunesConfig.tunesUrl,
        params: {
          'method': 'user.getLovedTracks',
          'user': user,
          'api_key': this.tunesConfig.apiKey,
          'format': 'json',
          'preventIECache': new Date().getTime()
        }
      }

      return this.$http(tunesConfig).then(
        (results) => {
          return results.data;
        },(response) => {
          return response;
        });
    }
  }
  (() => {
    getModuleCore().service('tunesDataService', TunesDataService);
  })();
// }
