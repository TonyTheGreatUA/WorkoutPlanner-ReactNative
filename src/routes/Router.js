import React from 'react';
import {useContext} from 'react';
import {RootStoreContext} from '../stores/RootStore';
import {observer} from 'mobx-react-lite';
import {WorkoutHistory} from '../modules/WorkoutHistory';
import {CurrentWorkout} from '../modules/CurrentWorkout';

export const Router = observer(() => {
  const rootStore = useContext(RootStoreContext);
  return rootStore.routerStore.screen === 'WorkoutHistory' ? (
    <WorkoutHistory />
  ) : (
    <CurrentWorkout />
  );
});
