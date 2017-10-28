import React from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import CreateAccountScreen1 from '../components/CreateAccountScreen1';
import CreateAccountScreen2 from '../components/CreateAccountScreen2';
import FindRideScreen from '../components/FindRideScreen';
import SearchResultScreen from '../components/SearchResultScreen';

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
  CreateAccount2: {
    screen: CreateAccountScreen2,
    navigationOptions: {
      title: 'Create an account',
    },
  },
  FindRide: {
    screen: FindRideScreen,
    navigationOptions: {
      title: 'Find a ride',
    },
  },
  SearchResult: {
    screen: SearchResultScreen,
    navigationOptions: {
      title: 'Your driver',
    },
  }
});
