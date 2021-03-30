import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import SignupLoginScreen from './screens/SignupLoginScreen'
import {AppTabNavigator} from './components/AppTabNavigator'


export default function App() {
  return (
      <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  SignupLoginScreen : {screen : SignupLoginScreen},
  BottomTab : {screen : AppTabNavigator}
});

const AppContainer = createAppContainer(switchNavigator)
