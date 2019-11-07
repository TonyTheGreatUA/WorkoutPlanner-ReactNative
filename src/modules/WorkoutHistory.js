/*eslint-disable*/
//@flow
import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';
import {RootStoreContext} from '../stores/RootStore';

type Props = {};

export const WorkoutHistory = observer(({}: Props) => {
  const rootStore = useContext(RootStoreContext);

  return (
    <View style={styles.containter}>
      <Text style={styles.text}>Workout Planner</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          rootStore.workoutStore.currentExcercises.push(
            {
              exercise: 'Squat',
              numSets: 5,
              reps: 5,
              sets: ['', '', '', '', ''],
              weight: 260,
            },
            {
              exercise: 'Bench Press',
              numSets: 5,
              reps: 5,
              sets: ['', '', '', '', ''],
              weight: 200,
            },
            {
              exercise: 'Deadlift',
              numSets: 1,
              reps: 5,
              sets: ['', 'x', 'x', 'x', 'x'],
              weight: 360,
            },
          );
          rootStore.routerStore.screen = 'CurrentWorkout';
        }}>
        <Text style={styles.buttonText}>Create Workout</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  containter: {
    paddingTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'arial',
    color: '#FFF',
    padding: 20,
  },
  button: {
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 2, height: 2},
    width: '60%',
    backgroundColor: '#FFF',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
