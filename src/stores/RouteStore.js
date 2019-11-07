/*eslint-disable*/
import React from 'react';
import {observable, decorate} from 'mobx';
import {createContext} from 'react';
import {RootStore} from './RootStore';
type Routes = 'WorkoutHistory' | 'CurrentWorkout';

export class RouteStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  screen: Routes = 'WorkoutHistory';
}

decorate(RouteStore, {
  screen: observable,
});
