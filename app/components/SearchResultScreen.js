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
          <Image source={require('../resources/obama.jpg')} style={styles.image}/>
          <Image source={require('../resources/Rating.png')} style={styles.rating}/>
          </View>

      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  placeTextInput: {
    margin: 20
  },
  searchButton: {
    margin: 20
  },
  slider: {
    width: 100,
  },
  image: {
    width: 150,
    height: 150,
  },
  rating: {
    width: 150,
    height: 60,
  },
});
