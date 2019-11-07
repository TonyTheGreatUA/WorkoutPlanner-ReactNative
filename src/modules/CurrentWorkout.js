/*eslint-disable*/
//@flow
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';
import WorkoutComponent from '../components/WorkoutComponent/';
import {RootStoreContext} from '../stores/RootStore';
import {ScrollView} from 'react-native-gesture-handler';
type Props = {};

export const CurrentWorkout = observer(({}: Props) => {
  const rootStore = useContext(RootStoreContext);

  return (
    <View style={styles.container}>
      {rootStore.workoutStore.currentExcercises.map(exc => {
        return (
          <WorkoutComponent
            onSetPress={setIndex => {
              const value = exc.sets[setIndex];
              let newValue: string;
              if (value === '') {
                newValue = `${exc.reps}`;
              } else if (value === '0') {
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
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
