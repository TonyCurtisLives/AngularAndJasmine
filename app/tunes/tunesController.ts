'use strict'
module dogsrus.virtdog {
  export class TunesController {
    public data = {};
    public tracksToDroolOver = [];
    public tunesError;

    static $inject = ['tunesDataService', 'tunesConfig'];
    constructor(private tunesDataService: TunesDataService, private tunesConfig: TunesConfig) { }

    // not implemented yet
    getArtistTopAlbums() {
      this.tunesDataService.getArtistTopAlbums('barking dogs').then((data) => {
        this.data = data;
      });
    }

    getLovedTracks() {
      this.tunesDataService.getLovedTracks(this.tunesConfig.userName).then((data) => {
        this.tracksToDroolOver = (<any>data).lovedtracks.track;
      }, (reason) => { this.tunesError = reason });
    }
  }
  (() => {
    dogsrus.virtdog.getModuleTunes().controller('tunesController', TunesController);
  })();
} 