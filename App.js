import React, { Component } from 'react';
import { AppRegistry, Alert, StyleSheet, TextInput, View, Button } from 'react-native';

export default class LaunchScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {text: 'Try'};
    }

    _onPressButton() {
        Alert.alert('Title', 'Message');
    }

    render() {
        return (
            <View style={styles.container}>
              <TextInput
                  style={styles.textInputContainer}
                  placeholder="Username"
                  onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                  style={styles.textInputContainer}
                  placeholder="Password"
              />
              <View style={styles.buttonContainer}>
                <Button
                    onPress={this._onPressButton}
                    title={this.state.text}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                    onPress={this._onPressButton}
                    title="Press Me"
                    color="#841584"
                />
              </View>
              <View style={styles.alternativeLayoutButtonContainer}>
                <Button
                    onPress={this._onPressButton}
                    title="This looks great!"
                />
                <Button
                    onPress={this._onPressButton}
                    title="OK!"
                    color="#841584"
                />
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInputContainer: {
        margin: 60,
        justifyContent: 'center',
        backgroundColor:'green'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => LaunchScreen);
