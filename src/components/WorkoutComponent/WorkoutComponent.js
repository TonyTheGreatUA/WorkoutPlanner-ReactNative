/*eslint-disable*/
//@flow
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './WorkoutComponent.styles';

type Props = {
  excersice: string,
  repsAndWeight: string,
  sets: string[],
  onSetPress: (index: number) => void,
};

const WorkoutComponent = observer(
  ({excersice, repsAndWeight, sets, onSetPress}) => {
    return (
      <View style={styles.cardView}>
        <View style={styles.topRow}>
          <Text style={styles.topRowText}>{excersice}</Text>
          <Text style={styles.topRowText}>{repsAndWeight}</Text>
        </View>
        <View style={styles.bottomRow}>
          {sets.map((set, index) => {
            if (set === 'x') {
              return (
                <View
                  style={[styles.circle, styles.fadedBackground]}
                  key={set + index}>
                  <Text style={[styles.grayText, styles.circleText]}>X</Text>
                </View>
              );
            }
            if (set === '') {
              return (
                <TouchableOpacity
                  onPress={() => onSetPress(index)}
                  style={[styles.circle, styles.fadedBackground]}
                  key={set + index}
                />
              );
            }
            return (
              <TouchableOpacity
                onPress={() => onSetPress(index)}
                style={styles.circle}
                key={set + index}>
                <Text style={[styles.whiteText, styles.circleText]}>{set}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  },
);

export default WorkoutComponent;
