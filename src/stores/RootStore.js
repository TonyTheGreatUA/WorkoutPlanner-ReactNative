import {createContext} from 'react';
import {RouteStore} from './RouteStore';
import {WorkoutStore} from './WorkoutStore';
import {WorkoutTimerStore} from './WorkoutTimerStore';

export class RootStore {
  routerStore = new RouteStore(this);
  workoutStore = new WorkoutStore(this);
  workoutTimerStore = new WorkoutTimerStore(this);
}

export const RootStoreContext = createContext(new RootStore());
