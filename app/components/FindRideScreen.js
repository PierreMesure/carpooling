import React, { Component } from 'react';
import {Alert, StyleSheet, TextInput, Text, View, Button, Slider } from 'react-native';

export default class FindRideScreen extends Component {


  constructor(props) {
      super(props);
      this.state = {timeRange: 0}
  }

  _onPressButton() {
      Alert.alert('Title', 'Message');
  }

  render() {
      const { navigate } = this.props.navigation;
      return (
          <View style={styles.container}>
{/*            <Text style={styles.title}>
              Find a ride
            </Text> */}
            <TextInput
                style={styles.placeTextInput}
                placeholder="Destination"
            />
            <Text style = {{fontSize: 15}}>
              Departing from now:
            </Text>
            <Slider
                  style={styles.slider}
                  step={1}
                  minimumValue={0}
                  maximumValue={60} //minutes
                  value={this.state.timeRange}
                  onValueChange={timeRange => this.setState({ timeRange })}
            />
            <Text style = {{fontSize: 20}}>
              {this.state.timeRange} min
            </Text>
            <Button
                style={styles.searchButton}
                title="Search"
                onPress={() =>
                  navigate('SearchResult')
                }
            />
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
    fontSize: 30,
    margin: 20
  },
  searchButton: {
    margin: 20
  },
  slider: {
    width: 100,
  }
});
