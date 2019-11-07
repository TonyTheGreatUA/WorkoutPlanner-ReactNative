/*eslint-disable*/
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Router} from './src/routes/Router';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Router />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#d22d2e',
    width: '100%',
    maxWidth: 425,
  },
});
export default App;
