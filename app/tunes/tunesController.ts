'use strict';
namespace dogsrus.virtdog {
  export class TunesController {
    public data = {};
    public tracksToDroolOver = [];
    public tunesError;
    public tracksText = '';

    static $inject = ['tunesDataService', 'tunesConfig'];
    constructor(private tunesDataService: TunesDataService, private tunesConfig: TunesConfig) { }

    // not implemented yet
    public getArtistTopAlbums() {
      this.tunesDataService.getArtistTopAlbums('barking dogs').then((data) => {
        this.data = data;
      });
    }

    public getLovedTracks() {
      this.tunesDataService.getLovedTracks(this.tunesConfig.userName).then((data) => {
        this.tracksToDroolOver = (<any>data).lovedtracks.track;
        this.tracksToDroolOver.forEach(track => {
          this.tracksText += track.name + ' - ' + track.artist.name + '\r\n';
        })
      }, (reason) => { this.tunesError = reason; });
    }
  }
  (() => {
    dogsrus.virtdog.getModuleTunes().controller('tunesController', TunesController);
  })();
}
