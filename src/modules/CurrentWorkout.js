/*eslint-disable*/
//@flow
import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {observer} from 'mobx-react-lite';
import WorkoutComponent from '../components/WorkoutComponent/';
import {RootStoreContext} from '../stores/RootStore';
import {ScrollView} from 'react-native-gesture-handler';
import {WorkoutTimerComponent} from '../components/WorkoutTimerComponent/WorkoutTimerComponent';
type Props = {};

export const CurrentWorkout = observer(({}: Props) => {
  const rootStore = useContext(RootStoreContext);

  useEffect(() => {
    return () => {
      rootStore.workoutTimerStore.stopTimer();
    };
  }, []);

  return (
    <View style={styles.container}>
      {rootStore.workoutStore.currentExcercises.map(exc => {
        return (
          <WorkoutComponent
            onSetPress={setIndex => {
              rootStore.workoutTimerStore.startTimer();
              const value = exc.sets[setIndex];
              let newValue: string;
              if (value === '') {
                newValue = `${exc.reps}`;
              } else if (value === '0') {
                rootStore.workoutTimerStore.stopTimer();
                newValue = '';
              } else {
                newValue = `${parseInt(value) - 1}`;
              }
              exc.sets[setIndex] = newValue;
            }}
            key={exc.exercise}
            excersice={exc.exercise}
            repsAndWeight={`${exc.numSets}x${exc.reps} ${exc.weight}lbs`}
            sets={exc.sets}
          />
        );
      })}
      {rootStore.workoutTimerStore.isRunning ? (
        <WorkoutTimerComponent
          percent={rootStore.workoutTimerStore.percent}
          currentTime={rootStore.workoutTimerStore.display}
          onClosePress={() => rootStore.workoutTimerStore.stopTimer()}
        />
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
