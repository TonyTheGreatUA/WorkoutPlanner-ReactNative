/*eslint-disable*/
import React, {createContext} from 'react';
import {observable, decorate} from 'mobx';
import RootStore from './RootStore';

interface WorkoutHistory {
  [key: string]: Array<{
    excersice: string,
    value: number,
  }>;
}
interface СurrentExcercise {
  weight: number;
  reps: number;
  numSets: number;
  exercise: string;
  sets: string[];
}
type Workoutday = 'a' | 'b';

export class WorkoutStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  currentSquat: number;
  currentBenchPress: number;
  currentOverheadPress: number;
  currentDeadlift: number;
  currentBarbellRow: number;

  lastWorkoutType: Workoutday;

  currentExcercises: СurrentExcercise[] = [];

  history: WorkoutHistory;
}

decorate(WorkoutStore, {
  currentSquat: observable,
  currentBenchPress: observable,
  currentOverheadPress: observable,
  currentDeadlift: observable,
  currentBarbellRow: observable,
  lastWorkoutType: observable,
  currentExcercises: observable,
  history: observable,
});
