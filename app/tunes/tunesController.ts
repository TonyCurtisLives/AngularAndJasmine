'use strict';
import {getModuleTunes} from './tunes.module';
import {TunesDataService} from '../core/tunesDataService';
import {TunesConfig} from '../core/constants';
// module dogsrus.virtdog {
  export class TunesController {
    public data = {};
    public tracksToDroolOver = [];
    public tunesError;
    public tracksText = '';

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
        this.tracksToDroolOver.forEach(track => {
          this.tracksText += track.name + ' - ' + track.artist.name + '\r\n';
        })
      }, (reason) => { this.tunesError = reason });
    }
  }
  (() => {
    getModuleTunes().controller('tunesController', TunesController);
  })();
// } 
