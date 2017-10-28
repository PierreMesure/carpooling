import React, { Component } from 'react';
import {Alert, StyleSheet, TextInput, Text, View, Button } from 'react-native';
import styles from '../styles.js';

export default class LoginScreen extends Component {

  constructor(props) {
      super(props);
  }

  _onPressButton() {
      Alert.alert('Title', 'Message');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            Looplib
          </Text>
          <TextInput
              style={styles.textInput}
              placeholder="Username"
          />
          <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
          />
          <Button
              style={styles.button}
              title="Login"
              onPress={() =>
                navigate('FindRide')
              }
          />
          <Button
            style={styles.text}
            title="Create a new account"
            onPress={() =>
              navigate('CreateAccount1')
            }
          />
        </View>
    );
  }
};
