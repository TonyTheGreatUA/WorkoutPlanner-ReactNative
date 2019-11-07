//@flow
/*eslint-disable*/

import React from 'react';
import styles from './WorkoutTimerComponent.style';
import {View, Text, TouchableOpacity} from 'react-native';

type Props = {
  onClosePress: () => void,
  currentTime: string,
  percent: string,
};

export const WorkoutTimerComponent = ({
  currentTime,
  onClosePress,
  percent,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, {width: percent}]}></View>
      <View style={styles.row}>
        <Text style={styles.timeText}>Timer: {currentTime}</Text>
        <TouchableOpacity style={styles.button} onPress={onClosePress}>
          <Text style={styles.closeButton}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
