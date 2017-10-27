import React, { Component } from 'react';
import {Alert, StyleSheet, TextInput, Text, View, Button } from 'react-native';

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
              style={styles.usernameTextInput}
              placeholder="Username"
          />
          <TextInput
              style={styles.passwordTextInput}
              placeholder="Password"
              secureTextEntry={true}
          />
          <Button
              style={styles.loginButton}
              title="Login"
              onPress={() =>
                navigate('FindRide')
              }
          />
          <Button
            style={styles.subText}
            title="Create a new account"
            onPress={() =>
              navigate('CreateAccount1')
            }
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
  loginButton: {
    margin: 20,
  }
});
