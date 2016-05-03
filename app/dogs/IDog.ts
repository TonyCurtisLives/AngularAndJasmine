'use strict';
import {IAnimal} from '../animals/IAnimal';
// module dogsrus.virtdog {
  export enum DogTailState {
    wagging,
    elevated,
    drooped,
    tucked
  }
  export interface IDog extends IAnimal{
    coatStyle: string;
    tailStyle: string;
    earStyle: string;
    age: number;
    barkSound: string;
    startupBlog: string;
    tailState: DogTailState;
    earState: string;
    chewUrgeInterval: number;
    motherNature1Interval: number;
    motherNature2Interval: number;
    dogTiredInterval: number;
    dogSleepDuration: number;
    dogLonleyEndurance: number;
    dogLonleyDuration: number;
  }
// } 
