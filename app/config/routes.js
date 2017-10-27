import React from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import CreateAccountScreen1 from '../components/CreateAccountScreen1';
import FindRideScreen from '../components/FindRideScreen';

export const Stacks = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  CreateAccount1: {
    screen: CreateAccountScreen1,
    navigationOptions: {
      title: 'Create an account',
    },
  },
  FindRide: {
    screen: FindRideScreen,
    navigationOptions: {
      title: 'Find a ride',
    },
  }
});
