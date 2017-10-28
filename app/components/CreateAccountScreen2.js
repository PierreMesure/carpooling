import React, { Component } from 'react';
import {Alert, StyleSheet, TextInput, Text, Switch, View, Button } from 'react-native';
import styles from '../styles.js';

export default class CreateAccountScreen2 extends Component {

  getVegvesenURL() {
    return 'https://www.vegvesen.no/kjoretoy/Kjop+og+salg/' +
           'Kj%C3%B8ret%C3%B8yopplysninger?registreringsnummer=';
  }

  constructor(props) {
      super(props);
      this.state = {
        licensePlate: '',
        carModel: '',
        emissions: '   ',
        consumption: '   ',
        numberOfSeats: 0
      }
  }

  _onPressSearchButton = () => {
        fetch(this.getVegvesenURL() + this.state.licensePlate, {
           method: 'GET'
        })
        .then((response) => response.text())
        .then((response) => {
           //console.log(response);

           this.setState({
             carModel: this.getCarModel(response),
             emissions: this.getEmissions(response),
             consumption: this.getConsumption(response),
             numberOfSeats: this.getNumberOfSeats(response)
           })
           console.log(this.getCarModel(response));
        })
        .catch((error) => {
           console.error(error);
        });
      }

   getCarModel(response) {
     let beginIndex = response.indexOf('<dt>Merke og modell</dt><dd>') + 57;
     response = response.substring(beginIndex, beginIndex + 200);
     beginIndex = 0;
     let intermediaryIndex = response.indexOf('<span class="util-ordgruppe">');
     console.log(intermediaryIndex);
     let endIndex = response.indexOf('</span></span></dd><dt>');
     console.log(endIndex);
     return response.substring(beginIndex, intermediaryIndex)
          + response.substring(intermediaryIndex + 29, endIndex);
   }

   getEmissions(response) {
     let beginIndex = response.indexOf('<dt>CO2-utslipp</dt><dd>') + 24;
     let endIndex = response.indexOf(' g/km');
     return response.substring(beginIndex, endIndex);
   }

   getConsumption(response) {
     return '5,7 L/km';
   }

   getNumberOfSeats(response) {
     let index = response.indexOf('<dt>Antall seter</dt><dd>');
     return response.substring(index, index + 1);
   }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            Add a car
          </Text>
          <TextInput
              style={styles.textInput}
              placeholder='Enter your license plate'
              onChangeText={(licensePlate) => this.setState({licensePlate})}
          />
          <Button
              style={styles.button}
              onPress={this._onPressSearchButton}
              title='Search'
          />
          <View style={styles.container}>
            <Text style={styles.text}>
              Car model: {this.state.carModel}
            </Text>
            <Text style={styles.text}>
              Carbon emissions: {this.state.emissions} g/km
            </Text>
            <Text style={styles.text}>
              Fuel consumption: {this.state.consumption} L/km
            </Text>
          </View>
          <Button
              style={styles.button}
              onPress={this._onPressSearchButton}
              title='Next'
          />
        </View>
    );
  }
};
