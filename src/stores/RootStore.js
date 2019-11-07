import {createContext} from 'react';
import {RouteStore} from './RouteStore';
import {WorkoutStore} from './WorkoutStore';

export class RootStore {
  routerStore = new RouteStore(this);
  workoutStore = new WorkoutStore(this);
}

export const RootStoreContext = createContext(new RootStore());
