import React, { Component } from 'react';
import {Alert, StyleSheet, TextInput, Text, View, Button } from 'react-native';

export default class FindRideScreen extends Component {


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
              Find a ride
            </Text>
            <TextInput
                style={styles.placeTextInput}
                placeholder="Departure"
            />
            <TextInput
                style={styles.placeTextInput}
                placeholder="Arrival"
            />
            <Button
                style={styles.searchButton}
                onPress={this._onPressButton}
                title="Search"
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
  placeTextInput: {
    textAlign: 'center',
    margin: 20
  },
  searchButton: {
    margin: 20
  }
});
