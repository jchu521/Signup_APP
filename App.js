import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import AuthLoadingScreen from './src/navigations/SwitchStack';

export default class App extends Component {

  render() {
    return (
      <AuthLoadingScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
