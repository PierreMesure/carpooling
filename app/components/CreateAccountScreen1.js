import React, { Component } from 'react';
import {Alert, StyleSheet, TextInput, Text, Switch, View, Button } from 'react-native';

export default class CreateAccountScreen1 extends Component {

  constructor(props) {
      super(props);
  }

  _onPressButton() {
      Alert.alert('Title', 'Message');
  }

  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.title}>
              Create new account
            </Text>
            <TextInput
                style={styles.usernameTextInput}
                placeholder='Username'
            />
            <TextInput
                style={styles.passwordTextInput}
                placeholder='Password'
                secureTextEntry={true}
            />
            <TextInput
                style={styles.passwordTextInput}
                placeholder='Repeat password'
                secureTextEntry={true}
            />
            <View style={styles.switchContainer}>
              <Switch
                  style={styles.hasACarSwitch}
                  title='Test'
              />
              <Text style={styles.hasACarText}>
                I do not have a car
              </Text>
            </View>
            <Button
                style={styles.nextButton}
                onPress={this._onPressButton}
                title='Next'
            />
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  usernameTextInput: {
    textAlign: 'center',
    margin: 20
  },
  passwordTextInput: {
    textAlign: 'center',
    margin: 20
  },
  switchContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  hasACarSwitch: {
    margin: 20
  },
  hasACarText: {

  },
  nextButton: {
    margin: 20,
  }
});
