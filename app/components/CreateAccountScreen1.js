import React, { Component } from 'react';
import {Alert, StyleSheet, TextInput, Text, Switch, View, Button } from 'react-native';
import styles from '../styles.js';

export default class CreateAccountScreen1 extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            Create new account
          </Text>
          <TextInput
              style={styles.textInput}
              placeholder='Username'
          />
          <TextInput
              style={styles.textInput}
              placeholder='Password'
              secureTextEntry={true}
          />
          <TextInput
              style={styles.textInput}
              placeholder='Repeat password'
              secureTextEntry={true}
          />
{/*            <Switch
                style={styles.hasACarSwitch}
                title='Test'
            />
            <Text style={styles.text}>
              I do not have a car
            </Text>
          </View>
          */}
          <Button
              style={styles.button}
              title='Next'
              onPress={() =>
                navigate('CreateAccount2')
              }
          />
        </View>
    );
  }
};
