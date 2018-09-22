import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoginScreen from './src/components/screens/Login';
import SignUpScreen from './src/components/screens/SignUp';

export default class App extends Component {
  state = {
    isLoginScreen: false
  }

  render() {
    return (
      <View>
        {
          this.state.isLoginScreen ? <LoginScreen /> : <SignUpScreen />
        }
      </View>
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
