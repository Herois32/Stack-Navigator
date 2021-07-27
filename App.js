import React,  { Component} from 'react';
import 'react-native-gesture-handler';
import { View, Text, StyleSheet, createStackNavigator, createAppContainer }  from '@react-navigation/native';

import Tela from './src/screens/Tela';
import Tela2 from './src/screens/Tela2';

const AppNavigation = createStackNavigator({

  Tela:{
    screen:Tela
  },

  Tela2:{
    screen:Tela2
  }

});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;