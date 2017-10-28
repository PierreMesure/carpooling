import React, { Component } from 'react';
import {Alert, StyleSheet, TextInput, Text, View, Button, Image } from 'react-native';

export default class SearchResult extends Component {


  constructor(props) {
      super(props);
  }

  _onPressButton() {
      Alert.alert('Title', 'Message');
  }

  render() {
      return (
          <View style={styles.container}>
          <Image source={require('../resources/Search.png')} style={styles.image}/>
          </View>

      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1
  }
});
